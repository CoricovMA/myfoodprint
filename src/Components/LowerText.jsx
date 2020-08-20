import React from 'react';
import valueprop1 from '../Assets/valueprop1.svg'
import valueprop2 from '../Assets/valueprop2.svg'
import valueprop3 from '../Assets/valueprop3.svg'
import {Card, Col, Row} from 'react-bootstrap'

function InfoCard(props) {
    const titleStyle = {
        fontSize: 1.65,
        fontWeight: 400,
        color: '#4B4B4C'
    }

    return (
        <Col data-aos={props.info.anim} data-aos-duration='1000'>
            <Card style={{
                border: '0px'
            }}>
                <Card.Img src={props.info.pic}/>
                <Card.Body style={{
                    backgroundColor: '#fbfbfb',
                    fontFamily: "'Fira Sans', sans-serif",
                }}>
                    <Card.Title style={{
                    }}>
                        {props.info.title}
                    </Card.Title>
                    <Card.Text >
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
            pic: valueprop1,
            anim: 'fade-up',
        },
        {
            title: "Curated Data",
            blurb: "Gain access to expert-level knowledge. We parsed through millions of pieces of data to ensure your calculations are precise",
            pic: valueprop2,
            anim: 'fade-down'
        },
        {
            title: "Digestible Information",
            blurb: "CO2 is difficult to understand. We provide intelligible output that is meaningful to you and helps you eat sustainably",
            pic: valueprop3,
            anim: 'fade-up'
        }
    ]

    return (
        <Row style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#fbfbfb'
        }}>
            {componentInfo.map(comp => <InfoCard info={comp}/>)}
        </Row>

    )

}
