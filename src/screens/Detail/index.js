import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { doGet } from '../../helpers/ApiHelpers';

import { Container } from './styles';

const Detail = () => {
    const [person, setPerson] =  useState(null);
    const { id } = useParams()

    useEffect(() => {
        doGet(`people/${id}`).then(setPerson);
    }, [id]);

    if(!person) {
        return (<Container><h1>Loading...</h1></Container>)
    }

    if(person.gender === "male") {
        return  <Container>
                <h1>{person.name}</h1>
                <h3>
                    {person.name} is {person.height}cm tall and his mass is {person.mass}kg. His hair is {person.hair_color} and 
                    his eyes are {person.eye_color}. He was born in {person.birth_year}.
                </h3>
                </Container>
    }

    if(person.gender === "female") {
        return  <Container>
                <h1>{person.name}</h1>
                <h3>
                    {person.name} is {person.height}cm tall and her mass is {person.mass}kg. Her hair is {person.hair_color} and 
                    her eyes are {person.eye_color}. She was born in {person.birth_year}.
                </h3>
                </Container>
    }
    if(person.gender === "n/a") {
        return  <Container>
                <h1>{person.name}</h1>
                <h3>
                    {person.name} is {person.height}cm tall and their mass is {person.mass}kg. Their hair is {person.hair_color} and 
                    their eyes are {person.eye_color}. They were born in {person.birth_year}.
                </h3>
                </Container>
    }
};

export default Detail;