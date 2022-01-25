import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../Button';

export default function Options() {
    return (
        <Container>
            <Link to='/new'>
                <Button>
                    Enviar uma prova
                </Button>
            </Link>

            <Link to='/search'>
                <Button>
                    Ver uma prova
                </Button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    gap: 50px;
`;