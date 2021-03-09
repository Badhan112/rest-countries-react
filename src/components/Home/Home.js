import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { CountryContext } from '../../App';
import Country from '../Country/Country';

const Home = () => {
    const allCountries = useContext(CountryContext);
    return (
        <Container>
            <Row>
                {
                    allCountries.map(country => <Country country={country} />)
                }
            </Row>
        </Container>
    );
};

export default Home;