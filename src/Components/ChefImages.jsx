import React from 'react';
import valueprop1 from '../Assets/valueprop1.svg'
import valueprop2 from '../Assets/valueprop2.svg'
import valueprop3 from '../Assets/valueprop3.svg'
import {Card, Col, Row} from 'react-bootstrap'

function InfoCard(props) {
    return (
        <Col data-aos={props.info.anim} data-aos-duration='1000' xs={{span: 4}} md={{span: 3}} style={{padding: 0}}>
            <Card style={{
                border: '0px',
            }}>
                <Card.Img src={props.info.pic}
                />
            </Card>
        </Col>

    )
}

export default function ChefImages() {
    const componentInfo = [
        {
            title: "Measuring Simplified",
            blurb: "Automatically find your answer by typing, uploading, or copy and pasting your recipe",
            pic: valueprop1,
            anim: 'fade-left',
        },
        {
            title: "Curated Data",
            blurb: "Gain access to expert-level knowledge. We parsed through millions of pieces of data to ensure your calculations are precise",
            pic: valueprop2,
            anim: 'fade-up'
        },
        {
            title: "Digestible Information",
            blurb: "CO2 is difficult to understand. We provide intelligible output that is meaningful to you and helps you eat sustainably",
            pic: valueprop3,
            anim: 'fade-right'
        }
    ]

    return (
        <Row style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10%',
            backgroundColor: '#fbfbfb'
        }}>
            {componentInfo.map(comp => <InfoCard info={comp}/>)}
        </Row>

    )

}
