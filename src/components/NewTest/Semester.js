import styled from 'styled-components';

import Input from "../Input";
import Label from './Label';

export default function Semesters({ setSemester }) {
    return (
            <Container id='semester' onChange={(event) => setSemester(event.target.value)}>
                <Label htmlFor='semester'>
                    Semestre:
                </Label>
                <Input
                    type='radio'
                    id='first'
                    name='semester'
                    value={1}
                />
                <RadioLabel htmlFor='first'>
                    1° Semestre
                </RadioLabel>
                <Input
                    type='radio'
                    id='second'
                    name='semester'
                    value={2}
                />
                <RadioLabel htmlFor='second'>
                    2° Semestre
                </RadioLabel>
            </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const RadioLabel = styled(Label)`
    font-size: 17px;
    margin-right: 20px;
`;
