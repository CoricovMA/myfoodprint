import React from 'react';
import autumn from '../Assets/Trees/autumn_tree.svg'
import winter from '../Assets/Trees/winter_tree.svg'
import summer from '../Assets/Trees/summer_tree.svg'
import spring from '../Assets/Trees/spring_tree.svg'
import {Image, Row, Col} from 'react-bootstrap'

function TreeComponent(props) {

    console.log(props.index)

    return (
        <Col>
            <Image data-aos='zoom-in-up' data-aos-duration={props.index}
                   src={props.image}
            />
        </Col>

    )
}

export default function Trees() {
    const treeSVG = [spring, summer, autumn, winter];

    return (
        <Row>
            {treeSVG.map((tree, index) => <TreeComponent image={tree} index={index* 500}/>
            )}
        </Row>
    )

}