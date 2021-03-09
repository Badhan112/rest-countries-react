import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { countryCode } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [countryCode]);

    const {name, capital, nativeName, population, region, subregion, callingCodes, currencies, languages, timezones} = details;
    return (
        <Container style={{marginTop: '20px'}}>
            <Jumbotron>
                <Container>
                    <h1>{name} ({nativeName})</h1>
                    <p><b>Capital:</b> {capital}</p>
                    <p><b>Population:</b> {population}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Sub-Region:</b> {subregion}</p>
                    <p><b>Languages:</b> {
                        languages && languages.map(lang => `${lang.name}, `)
                    }</p>
                    <p><b>Currencies:</b> {
                        currencies && currencies.map(cur => `${cur.symbol} ${cur.name}(${cur.code}), `)
                    }</p>
                    <p><b>CallingCodes:</b> {
                        callingCodes && callingCodes.map(calCod => `${calCod}, `)
                    }</p>
                    <p><b>Timezones:</b> {
                        timezones && timezones.map(tZone => `${tZone}, `)
                    }</p>
                </Container>
            </Jumbotron>
        </Container>
    );
};

export default CountryDetails;