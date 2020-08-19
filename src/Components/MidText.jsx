import {Container, Jumbotron} from "react-bootstrap";
import React from "react";


export default function MidText(){
    const midStyle = {
        height: '100vh',
        marginBottom: 0,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        paddingTop: '30%'
    }

    const textStyle = {
        fontSize: '3.1em',
        fontWeight: 500,
        color: '#4B4B4C',
        lineHeight: 1.3,
        paddingLeft: '20%',
        paddingRight: '20%'
    }

    const subTitleStyle = {
        fontSize: '1.2em',
        fontWeight: '450',
        lineHeight: '27.2px',
        paddingLeft: '20%',
        paddingRight: '20%',
        paddingTop: '20px'
    }

    return (
        <Container fluid style={{
            marginBottom: 0
        }}>
            <Jumbotron style={midStyle} className='mr-auto'>
                <h2 style={textStyle} data-aos='fade-left'>
                    <u>30%</u> of greenhouse gases are caused by our diets
                </h2>
                <div data-aos="fade-right" >
                    <h5 style={subTitleStyle}>
                        Lack of transparency and information makes it difficult for you to change your impact.
                        We give you the tool to help you play your part in the sustainable future.
                    </h5>
                </div>

            </Jumbotron>
        </Container>
    )
}
