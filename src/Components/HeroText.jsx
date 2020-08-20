import React, {useState} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Col, Container, Row} from "react-bootstrap";

function HeroSub() {
    const style = {
        'paddingTop': '30px',
        'fontSize': '1.65em',
        'fontWeight': '400'
    }
    return (
        <h4 style={style}>
            MyFoodPrint provides users intelligence
            about their meal's environmental impact.
        </h4>
    )
}

export default function Intro() {
    const style = {
        'padding': "0",
        'margin': "0",
        'fontSize': '4.2em',
        'fontWeight': '500',
        'paddingTop': '25%',
        color: '#4B4B4C'
    }

    const spanStyle = {
        'fontWeight': '800',
        'color': '#85C020'
    }

    const jumboStyle = {
        'textAlign': 'center',
        'backgroundColor': 'white'
    }

    return (
        <Row style={{
            height: '92vh',
            width: '100%'
        }}>
            <Col>
            <Container>
                <Jumbotron style={jumboStyle} className='mr-auto'>
                    <h1 style={style}>
                        <div data-aos='fade-down' data-aos-easing='linear'>Create
                            <span style={spanStyle}> sustainable </span> meals,
                        </div>
                        <div data-aos='fade-up' data-aos-easing='linear'>
                        the <span style={spanStyle}> smart </span>
                            way</div>
                    </h1>
                    <HeroSub/>
                </Jumbotron>
            </Container>
            </Col>
        </Row>
    )

}