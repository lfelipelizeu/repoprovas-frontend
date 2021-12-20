import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getTests } from '../services/repoprovas.js';

export default function TestsList() {
    const { id } = useParams();
    const searchBy = useLocation().search.split('=')[1];
    const [testsList, setTestsList] = useState();

    useEffect(() => {
        getTests({ searchBy, id })
            .then((response) => setTestsList(response.data))
            .catch((error) => alert(error.message));
    });

    return (
        <section>
            <h1>{testsList?.name}</h1>
            {testsList ? <GroupedTests testsList={testsList.tests} searchBy={searchBy} /> : null}
        </section>
    );
}

function GroupedTests({ testsList, searchBy }) {
    const categories = [...new Set(testsList.map((test) => test.category))];

    return (
        <>
            {categories.map((category, index) => {
                return (
                    <div key={index}>
                        <h2>{category}:</h2>
                        {testsList.filter((test) => test.category === category).map((test, index) => <a key={index} href={test.link} rel='noreferrer' target='_blank'>{test.name} - {searchBy === 'subject' ? test.professor : test.subject}</a>)}
                    </div>
                );
            })}
        </>
    );
}
