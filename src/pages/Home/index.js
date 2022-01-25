import styled from 'styled-components';

import Logo from '../../components/Home/Logo';
import Options from '../../components/Home/Options';

export default function Home() {
    return (
        <Container>
            <Logo />
            <Info>O que deseja?</Info>
            <Options />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`;

const Info = styled.p`
    font-size: 25px;
    margin-bottom: 30px;
`;
