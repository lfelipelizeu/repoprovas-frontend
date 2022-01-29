import styled from 'styled-components';

import palette from '../../styles/Colors';

export default function Test({ test, searchBy }) {
    function openInNewTab() {
        window.open(test.link);
    }

    return (
        <li>
            <Button onClick={openInNewTab}>
                {test.name} - {searchBy === 'subject' ? test.professor : test.subject}
            </Button>
        </li>
    );
}

const Button = styled.button`
    display: block;
    font-size: 15px;
    background-color: ${palette.dukeBlue};
    color: ${palette.ivory};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 10px;
    margin: 0 auto;

    :hover {
        background-color: ${palette.iris};
    }
`;
