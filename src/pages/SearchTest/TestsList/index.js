import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getTests } from '../../../services/repoprovas.js';

import GroupedByCategory from '../../../components/TestsList/GroupedByCategory';

export default function TestsList() {
    const { id } = useParams();
    const searchBy = useLocation().search.split('=')[1];
    const [testsList, setTestsList] = useState();

    useEffect(() => {
        getTests({ searchBy, id })
            .then((response) => setTestsList(response.data))
            .catch((error) => alert(error.message));
    }, []);

    return (
        <Container>
            <Name>{testsList?.name}</Name>
            {testsList && <GroupedByCategory testsList={testsList.tests} searchBy={searchBy} />}
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
    height: calc(100% - 40px);
    margin: 20px auto;
`;

const Name = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 15px;
`;
