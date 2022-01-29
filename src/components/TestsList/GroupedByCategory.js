import styled from 'styled-components';

import ListCategoryTests from './ListCategoryTests';

export default function GroupedByCategory({ testsList, searchBy }) {
    const categories = ['P1', 'P2', 'P3', 'P4', 'Outros'];

    function orderAndSeparateTestsByCategory() {
        const finalList = {}

        for (let i = 0; i < categories.length; i++) {
            finalList[categories[i]] = testsList.filter((test) => test.category === categories[i]);
        }

        return finalList;
    }

    return (
        <Container>
            {categories.map((category, index) => {
                if (orderAndSeparateTestsByCategory()[category].length > 0) {
                    return (
                        <ListCategoryTests
                            key={index}
                            testsList={orderAndSeparateTestsByCategory()[category]}
                            category={category}
                            searchBy={searchBy}
                        />
                    )
                }
                // eslint-disable-next-line array-callback-return
                return;
            })}
        </Container>
    );
}

const Container = styled.ul`
    width: 100%;
    height: calc(100% - 55px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }
`;
