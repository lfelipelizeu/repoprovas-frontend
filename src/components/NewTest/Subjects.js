import { useState, useEffect } from 'react';
import { getSubjects } from '../../services/repoprovas.js';

import Select from '../Select';
import Label from './Label';

export default function Subjects({ setSubject, disable }) {
    const [subjectsList, setSubjectsList] = useState([]);

    useEffect(() => {
        getSubjects()
            .then((response) => setSubjectsList(response.data))
            .catch((error) => alert(error.message));
    });

    return (
        <div>
            <Label htmlFor='subjects'>
                Matéria:
            </Label>
            <Select id='subjects' onChange={(event) => setSubject(event.target.value)} disabled={disable}>
                <option defaultValue hidden>Disciplina</option>
                {subjectsList.map((subject, index) => <option key={index} value={subject.id}>{subject.name}</option>)}
            </Select>
        </div>
    );
}