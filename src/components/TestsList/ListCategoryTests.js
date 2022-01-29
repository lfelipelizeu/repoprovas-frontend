import styled from 'styled-components';

import Test from './Test';

export default function CategoryTestsList({ testsList, category, searchBy }) {
    function orderTestsByYear() {
        const orderList = testsList.sort((a, b) => {
            return Number(a.name.split('.')[0]) - Number(b.name.split('.')[0]);
        });

        return orderList;
    }

    return (
        <Container>
            <Category>{category}:</Category>
            <TestsList>
                {orderTestsByYear().map((test, index) => 
                    <Test
                        key={index}
                        test={test}
                        searchBy={searchBy}
                    />
                )}
            </TestsList>
        </Container>
    );
}

const Container = styled.li`
    margin-bottom: 30px;
`;

const Category = styled.h3`
    font-size: 30px;
    margin-bottom: 15px;
`;

const TestsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    column-gap: 5%;
    row-gap: 10px;
`;
