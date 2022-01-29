import styled from 'styled-components';

import ProfessorsList from './ProfessorsList';
import SubjectsList from './SubjectsList';

export default function ListOptions({ searchBy, optionsList }) {
    return (
        <Container>
            {searchBy === 'subject' ? <SubjectsList optionsList={optionsList} /> : <ProfessorsList optionsList={optionsList} />}
        </Container>
    );
}

const Container = styled.ul`
    width: 100%;
    height: calc(100% - 170px);
    margin-top: 20px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }
`;
