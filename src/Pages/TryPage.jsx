import React from 'react';
import Header from '../Components/Header'
import {Col, Row, Button} from 'react-bootstrap'

function TextAr() {


    return (
        <Row style={{
            height: '100vh'
        }}>
            <Col
                xs={{span: 6}}
                md={{span: 4, offset: 1}}
                lg={6}
            >
               <h2 id='input-title'>Enter a Recipe!</h2>
               <textarea id='input'
                         placeholder='Type or paste your recipe or ingredients here...
                                   Separate Ingredients with commas'
               />
               <Button className='try-button'>Calculate</Button>
            </Col>
            <Col>
                {}
            </Col>
        </Row>

    )
}

export default function TryPage() {

    return (
        <div>
            <Header/>
            <TextAr/>
        </div>
    )

}