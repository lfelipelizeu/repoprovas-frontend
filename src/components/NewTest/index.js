import styled from 'styled-components';
import { useState } from 'react';
import Categories from './Categories.js';
import Subjects from './Subjects.js';
import Professors from './Professors.js';
import Semesters from './Semester';
import { createTest } from '../../services/repoprovas.js';
import { useNavigate } from 'react-router-dom';

import Label from './Label';
import Input from '../Input';
import Button from '../Button';

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
        <Form onSubmit={sendTest}>
            <div>
                <Label htmlFor='year'>
                    Ano da prova:
                </Label>
                <Input
                    type='number'
                    placeholder='Ano'
                    id='year'
                    min={2000}
                    max={(new Date()).getFullYear()}
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    required
                />
            </div>
            <Semesters setSemester={setSemester} />
            <Categories setCategory={setCategory} disable={!semester} />
            <Subjects setSubject={setSubject} disable={!category} />
            {subject && <Professors setClassOption={setClassOption} subjectId={subject} />}
            {classOption && <Input type='text' placeholder='Link da prova' onChange={(event) => setLink(event.target.value)} />}
            {link && classOption && <Button type='submit'>ENVIAR</Button>}
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 30px;
`;
