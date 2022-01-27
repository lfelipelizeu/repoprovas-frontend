import { useState, useEffect } from 'react';
import { getClasses } from '../../services/repoprovas.js';

import Select from '../Select';
import Label from './Label';

export default function Subjects({ subjectId, setClassOption }) {
    const [classesList, setClassesList] = useState([]);

    useEffect(() => {
        getClasses(subjectId)
            .then((response) => setClassesList(response.data))
            .catch((error) => alert(error.message));
    });

    return (
        <div>
            <Label htmlFor='professor'>
                Professor:
            </Label>
            <Select id='professor' onChange={(event) => setClassOption(event.target.value)}>
                <option defaultValue hidden>Professor</option>
                {classesList.map((classItem, index) => <option key={index} value={classItem.id}>{classItem.professor.name}</option>)}
            </Select>
        </div>
    );
}
