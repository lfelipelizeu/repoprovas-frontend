import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getTestsOptions } from '../services/repoprovas';

export default function ViewTestsOptions() {
    const [searchBy, setSearchBy] = useState();
    const [optionsList, setOptionsList] = useState([]);

    async function searchTests(value) {
        setOptionsList(null);
        setSearchBy(value);
        try {
            const response = await getTestsOptions(value);
            return setOptionsList(response.data);
        } catch (error) {
            setOptionsList([]);
            return alert(error.message);
        }
    }

    return (
        <section>
            <h1>Procurar por:</h1>
            <div onChange={(event) => searchTests(event.target.value)}>
                <input
                    type='radio'
                    id='professor'
                    name='search'
                    value='professor'
                    disabled={!optionsList}
                />
                <label htmlFor='professor'>
                    Professor
                </label>
                <input
                    type='radio'
                    id='subject'
                    name='search'
                    value='subject'
                    disabled={!optionsList}
                />
                <label htmlFor='subject'>
                    Disciplina
                </label>
            </div>
            {searchBy === 'subject' ? <GroupSubjects optionsList={optionsList} /> : optionsList?.map((option, index) => <Option key={index} option={option} searchBy={searchBy} />)}
        </section>
    );
}

function GroupSubjects({ optionsList }) {
    const periods = [...new Set(optionsList?.map((option) => option.period))];
    return (
        <>
            {periods.map((period, index) => {
                return (
                    <div key={index}>
                        <h2>Matérias {period === 0 ? 'optativas' : `do ${period}° ano`}</h2>
                        {optionsList.filter((option) => option.period === period).map((option, index) => <Option key={index} option={option} searchBy='subject' />)}
                    </div>
                );
            })}
        </>
    );
}

function Option({ option, searchBy }) {
    return (
        <>
            <Link to={`/tests/${option.id}?search=${searchBy}`}>
                <h3>{option.name}</h3>
            </Link>
            <p>Provas cadastradas: {option.testCount}</p>
        </>
    );
}
