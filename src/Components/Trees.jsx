import React from 'react';
import autumn from '../Assets/Trees/autumn_tree.svg'
import winter from '../Assets/Trees/winter_tree.svg'
import summer from '../Assets/Trees/summer_tree.svg'
import spring from '../Assets/Trees/spring_tree.svg'
import {Image, Row, Col, Container, Jumbotron} from 'react-bootstrap'

function TreeComponent(props) {


    return (
        <Col>
            <Image data-aos='zoom-in-up'
                   src={props.image}
            />
        </Col>

    )
}

export default function Trees() {
    const treeSVG = [spring, summer, autumn, winter];

    return (
                <Row>
                    {treeSVG.map(
                        tree => <TreeComponent image={tree}/>
                    )}
                </Row>
    )

}