import React from 'react';
import Trees from './Trees'
import {Button, Row} from 'react-bootstrap'

import {Container, Jumbotron} from "react-bootstrap";


export default function FinalText() {

    return (
        <Container fluid style={{
            width: '100%',
        }}>
            <Jumbotron style={{
                paddingBottom: 0,
                marginBottom: 0,
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Row style={{
                    textAlign: 'center',
                    marginBottom: '25%',
                    width: '100%',
                }}>
                    <h2  style={{
                        textAlign: 'center',
                        width: '100%',
                        marginTop: '20%'
                    }}>
                        Do <span style={{'color': '#85C020',fontWeight: 500}}>
                        your</span> part. Start now.
                    </h2>
                    <div>
                        <Button href='/try' className='try-button'>
                            Start Here
                        </Button>
                    </div>

                </Row>
                <Trees/>
            </Jumbotron>
        </Container>
    )
}
