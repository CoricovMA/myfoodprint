import React from 'react';
import autumn from '../Assets/Trees/autumn_tree.svg'
import winter from '../Assets/Trees/winter_tree.svg'
import summer from '../Assets/Trees/summer_tree.svg'
import spring from '../Assets/Trees/spring_tree.svg'
import {Image, Row, Col} from 'react-bootstrap'

function TreeComponent(props) {


    return (
        <Col>
            <Image data-aos='zoom-in-up'
                   data-aos-duration={props.index}
                   md={{span: 3}}
                   xs={{span: 6}}
                   src={props.image}
            />
        </Col>

    )
}

export default function Trees() {
    const treeSVG = [spring, summer, autumn, winter];

    return (
        <Row  className="align-bottom justify-content-md-center text-center">
            {treeSVG.map((tree, index) => <TreeComponent image={tree} index={index* 500} key={index+1}/>
            )}
        </Row>
    )

}