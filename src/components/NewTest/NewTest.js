import { useState } from 'react';
import Categories from './Categories.js';
import Subjects from './Subjects.js';
import Professors from './Professors.js';
import { createTest } from '../../services/repoprovas.js';
import { useNavigate } from 'react-router-dom';

export default function NewTest() {
    const [year, setYear] = useState(2000);
    const [semester, setSemester] = useState();
    const [category, setCategory] = useState();
    const [subject, setSubject] = useState();
    const [classOption, setClassOption] = useState();
    const [link, setLink] = useState('');
    const navigate = useNavigate();

    function sendTest(event) {
        event.preventDefault();

        const newTest = {
            year,
            semester: Number(semester),
            categoryId: Number(category),
            classId: Number(classOption),
            link,
        }

        createTest(newTest)
            .then(() => {
                alert('Prova cadastrada!');
                return navigate('/');
            })
            .catch((error) => alert(error.response.data));
    }

    return (
        <form onSubmit={sendTest}>
            <input
                type='number'
                placeholder='Ano'
                min={2000}
                max={(new Date()).getFullYear()}
                value={year}
                onChange={(event) => setYear(event.target.value)}
            />
            <Semesters setSemester={setSemester} />
            <Categories setCategory={setCategory} disable={!semester} />
            <Subjects setSubject={setSubject} disable={!category} />
            {subject ? <Professors setClassOption={setClassOption} subjectId={subject} /> : null}
            {classOption ? <input type='text' placeholder='Link da prova' value={link} onChange={(event) => setLink(event.target.value)} /> : null}
            {link ? <button type='submit'>Enviar prova</button> : null}
        </form>
    );
}

function Semesters({ setSemester }) {
    return (
        <div onChange={(event) => setSemester(event.target.value)}>
            <input
                type='radio'
                id='first'
                name='semester'
                value={1}
            />
            <label htmlFor='first'>
                1° Semestre
            </label>
            <input
                type='radio'
                id='second'
                name='semester'
                value={2}
            />
            <label htmlFor='second'>
                2° Semestre
            </label>
        </div>
    );
}
