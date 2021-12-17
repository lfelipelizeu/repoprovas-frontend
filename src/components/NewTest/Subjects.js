import { useState, useEffect } from 'react';
import { getSubjects } from '../../services/repoprovas.js';

export default function Subjects({ setSubject, disable }) {
    const [subjectsList, setSubjectsList] = useState([]);

    useEffect(() => {
        getSubjects()
            .then((response) => setSubjectsList(response.data))
            .catch((error) => alert(error.message));
    });

    return (
        <select onChange={(event) => setSubject(event.target.value)} disabled={disable}>
            <option defaultValue hidden>Disciplina</option>
            {subjectsList.map((subject, index) => <option key={index} value={subject.id}>{subject.name}</option>)}
        </select>
    );
}