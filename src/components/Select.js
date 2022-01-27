import styled from 'styled-components';

import palette from '../styles/Colors';

export default function Select({ children, ...props }) {
    return (
        <StyledInput {...props}>
            {children}
        </StyledInput>
    );
}

const StyledInput = styled.select`
    height: 35px;
    font-size: 20px;
    padding: 0 5px;
    border: none;
    border-radius: 10px;
    background-color: ${palette.ivory};
`;
