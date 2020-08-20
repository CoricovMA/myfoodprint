import React from 'react';
import {valueprop1, valueprop2, valueprop3} from '../Assets/'
import {Card, Col, Row} from 'react-bootstrap'

function InfoCard(props) {
    const titleStyle = {
        fontSize: 1.65,
        fontWeight: 400,
        color: '#4B4B4C'
    }

    return (
        <Col>
            <Card>
                <Card.img src={props.info.pic}/>
                <Card.Body>
                    <Card.Title>
                        {props.info.title}
                    </Card.Title>
                    <Card.Text>
                        {props.info.blurb}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default function LowerText() {
    const componentInfo = [
        {
            title: "Measuring Simplified",
            blurb: "Automatically find your answer by typing, uploading, or copy and pasting your recipe",
            pic: valueprop1
        },
        {
            title: "Curated Data",
            blurb: "Gain access to expert-level knowledge. We parsed through millions of pieces of data to ensure your calculations are precise",
            pic: valueprop2
        },
        {
            title: "Digestible Information",
            blurb: "CO2 is difficult to understand. We provide intelligible output that is meaningful to you and helps you eat sustainably",
            pic: valueprop3
        }
    ]

    return (
        <Row>
            {componentInfo.map((cmp) => (
                <InfoCard info={cmp}/>
            ))
            }
        </Row>
    )

}
