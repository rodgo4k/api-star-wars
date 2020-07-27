import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { doGet, getIdFromUrl } from '../../helpers/ApiHelpers';

import { Container } from './styles';

const Home = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        doGet('people/').then(response => setPeople(response.results));
    }, []);

    if(!people || !people.length) {
        return <Container><h1>Loading...</h1></Container>;
    }

const peopleList = people.map(p => {
    const id = getIdFromUrl(p.url);
    return (
    <li key={p.url}>
        <Link to={`/detail/${id}`}>{p.name}</Link>
    </li>
    );
});

    console.log(people);

    return (
    <>
        <Container>
            <h1>Characters</h1>
            <ul>{peopleList}</ul>
        </Container>
    </>);
};

export default Home;