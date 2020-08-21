import React, { useState } from 'react';
import Header from '../Components/Header'
import {Col, Row, Button} from 'react-bootstrap'

function IngredientEntry(props){

}

function IngredientTable(props){
    
}

function TextAr() {
    const [table, setTable] = useState();

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

               <br/>
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