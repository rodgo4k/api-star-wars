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

    return <Container><h1>{person.name}</h1></Container>
};

export default Detail;