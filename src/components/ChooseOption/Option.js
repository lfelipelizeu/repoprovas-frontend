import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Option({ option, searchBy }) {
    return (
        <Container>
            <Name to={`tests/${option.id}?search=${searchBy}`}>
                {option.name}
            </Name>
            <p>Provas cadastradas: {option.testCount}</p>
        </Container>
    );
}

const Container = styled.li`
    width: auto;
    margin-bottom: 20px;
`;

const Name = styled(Link)`
    font-size: 20px;
    font-weight: 700;
`;
