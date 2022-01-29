import styled from 'styled-components';

import palette from '../../styles/Colors';

export default function SearchByButtons({ searchBy, searchTests, disabled }) {
    return (
        <Container>
            <StyledButton onClick={() => searchTests('professor')} selected={searchBy === 'professor'} disabled={disabled}>
                Professor
            </StyledButton>
            <StyledButton onClick={() => searchTests('subject')} selected={searchBy === 'subject'} disabled={disabled}>
                Matéria
            </StyledButton>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    background: blue;
`;

const StyledButton = styled.button`
    width: 50%;
    height: 100%;
    font-size: 20px;
    border: none;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    color: ${palette.ivory};
    background-color: ${({ selected }) => selected ? palette.iris : palette.dukeBlue};
    filter: grayscale(${({ disabled }) => disabled ? 0.3 : 0});

    :hover {
        background-color: ${palette.iris};
    }
`;
