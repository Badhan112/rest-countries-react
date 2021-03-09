import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Country = ({country}) => {
    const {name, flag, altSpellings, capital, alpha2Code} = country;

    const history = useHistory();

    return (
        <Col lg={3} md={4} sm={12} style={{marginTop: '20px'}}>
            <Card bg='light'>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{altSpellings[1]}</Card.Text>
                    <Card.Text>Capital: {capital}</Card.Text>
                    <Button onClick={() => history.push(`/country/${alpha2Code.toLowerCase()}`)}>Learn More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Country;