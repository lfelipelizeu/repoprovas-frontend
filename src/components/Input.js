import styled from 'styled-components';

import palette from '../styles/Colors';

export default function Input({ children, ...props }) {
    return (
        <StyledInput {...props}>
            {children}
        </StyledInput>
    );
}

const StyledInput = styled.input`
    height: 35px;
    font-size: 20px;
    padding: 0 20px;
    border: none;
    border-radius: 10px;
    background-color: ${palette.ivory};
`;
