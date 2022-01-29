import styled from 'styled-components';
import { useState } from 'react';

import { getTestsOptions } from '../../../services/repoprovas';

import SearchByButtons from '../../../components/ChooseOption/SearchByButtons';
import ListOptions from '../../../components/ChooseOption/ListOptions';

export default function ChooseOption() {
    const [searchBy, setSearchBy] = useState();
    const [optionsList, setOptionsList] = useState([]);

    async function searchTests(value) {
        setOptionsList(null);
        setSearchBy(value);
        try {
            const response = await getTestsOptions(value);
            return setOptionsList(response.data);
        } catch (error) {
            setOptionsList([]);
            return alert(error.message);
        }
    }

    return (
        <Container>
            <Title>Procurar por:</Title>
                <SearchByButtons
                    searchBy={searchBy}
                    searchTests={searchTests}
                    disabled={!optionsList}
                />
                <ListOptions
                    searchBy={searchBy}
                    optionsList={optionsList}
                />
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
`;

const Title = styled.h2`
    font-size: 40px;
    margin-bottom: 30px;
`;
