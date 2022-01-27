import styled from 'styled-components';

import NewTest from '../../components/NewTest';

export default function NewTestPage() {
    return (
        <Container>
            <Title>
                Enviar prova
            </Title>
            <NewTest />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
`;

const Title = styled.h2`
    font-size: 40px;
    margin-bottom: 30px;
`;
