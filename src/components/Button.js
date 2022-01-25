import styled from 'styled-components';

import palette from '../styles/Colors';

export default function Button({ children }) {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    height: 50px;
    font-size: 20px;
    padding: 0 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: ${palette.ivory};
    background-color: ${palette.dukeBlue};

    :hover {
        background-color: ${palette.iris};
    }
`;