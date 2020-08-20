import React from 'react';
import Trees from './Trees'
import {Row} from 'react-bootstrap'

import {Container, Jumbotron} from "react-bootstrap";


export default function FinalText(){

    return (
        <Container fluid style={{
            height: '60vh',
            width: '100%',
            alignItems: 'end',
            paddingTop: '50%'
        }}>
            <Jumbotron className="align-bottom justify-content-md-center text-center" style={{
                paddingBottom: 0,
                marginBottom: 0,
                backgroundColor: 'white',
                position: 'static'
            }}>
                <Row>

                </Row>
                <Trees/>
            </Jumbotron>
        </Container>
    )
}
