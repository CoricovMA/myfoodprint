import React, { useState } from 'react';
import Header from '../Components/Header'
import {Col, Row, Button, Table} from 'react-bootstrap'
import {apiGetFoodPrint} from '../Api'

function IngredientEntry(props){

    return  (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

function IngredientTable(props){
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>INGREDIENT</th>
                    <th>QUANTITY</th>
                    <th>EMISSIONS</th>
                    <th>CALORIES</th>
                </tr>    
            </thead>
            <tbody>
                {props.ingredients.map( (ingredient) => 
                     <IngredientEntry ingredient={ingredient}/>
                 )}
            </tbody>
        </Table>
    )
}

function TextAr() {
    const [table, setTable] = useState();

    const getIngredients = () => {
        apiGetFoodPrint("1 kg beef").then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    function handleClick(){
        getIngredients();
    }

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
               <Button onClick={handleClick} className='try-button'>Calculate</Button>
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