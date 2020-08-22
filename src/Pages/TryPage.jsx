import React, {useState} from 'react';
import Header from '../Components/Header'
import {Col, Row, Button, Table} from 'react-bootstrap'
import {apiGetFoodPrint} from '../Api'

function IngredientEntry(props) {

    return (
        <tr >
            <td className='entry-col'>{props.ingredient.name}</td>
            <td className='entry-col'>{props.ingredient.quantity} {props.ingredient.volume}</td>
            <td className='entry-col'>{props.ingredient.emissions}</td>
            <td>{props.ingredient.calories}</td>
        </tr>
    )
}

function IngredientTable(props) {

    return (
        <Table id='result-table' className='shadow-sm'>
            <thead>
            <tr>
                <th>INGREDIENT</th>
                <th>QUANTITY</th>
                <th>EMISSIONS</th>
                <th>CALORIES</th>
            </tr>
            </thead>
            <tbody>
            {props.ingredients.map((ingredient, index) =>
                <IngredientEntry ingredient={ingredient} key={index}/>
            )}
            </tbody>
        </Table>
    )
}

function TextAr() {
    const [table, setTable] = useState();
    const [reqIngredients, setReqIngredients] = useState("");

    const getIngredients = () => {
        if (reqIngredients.length > 0) {

            apiGetFoodPrint(reqIngredients).then((res) => {
                setTable(<IngredientTable ingredients={res.data.ingredients}/>)

            }).catch((err) => {
                console.log(err)
            })
        }

    }

    function handleClick() {
        getIngredients();
    }

    return (
        <Row style={{
            height: '100vh'
        }}>
            <Col
                xs={{span: 6}}
                md={{span: 4, offset: 1}}
                lg={4}
            >
                <h2 id='input-title'>Enter a Recipe!</h2>
                <textarea id='input'
                          placeholder='Type or paste your recipe or ingredients here...
                                   Separate Ingredients with commas'
                          onChange={e => setReqIngredients(e.target.value)}
                />

                <br/>
                <Button onClick={handleClick} className='try-button'>Calculate</Button>
            </Col>
            <Col id="ingr-col"
                 xs={{span: 12}}
                 md={{span: 7}}
                 lg={{span: 4, offset: 5}}
            >
                {table}
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