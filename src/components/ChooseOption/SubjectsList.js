import styled from 'styled-components';

import Option from './Option';

export default function SubjectsList({ optionsList }) {
    const periods = [...new Set(optionsList?.map((option) => option.period))];

    return (
        <li>
            {periods.map((period, index) => {
                return (
                    <Subject key={index}>
                        <Period>Matérias {period === 0 ? 'optativas' : `do ${period}° ano`}</Period>
                        {optionsList.filter((option) => option.period === period).map((option, index) => <Option key={index} option={option} searchBy='subject' />)}
                    </Subject>
                );
            })}
        </li>
    );
}

const Subject = styled.ul`
    margin-bottom: 40px;
`;

const Period = styled.h3`
    font-size: 30px;
    margin-bottom: 5px;
`;
