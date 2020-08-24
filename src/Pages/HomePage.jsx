import React, {useEffect} from 'react';
import {Row} from 'react-bootstrap'
import axios from 'axios'
import {apiURL} from '../config/env'
import {apiGetFoodPrint} from '../Api'
import Header from '../Components/Header'
import Intro from '../Components/HeroText'
import MidText from '../Components/MidText'
import AOS from "aos";
import 'aos/dist/aos.css';
import Final from "../Components/Final";

function HomePage() {
    axios.defaults.baseURL = apiURL;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const getIngredients = () => {
        apiGetFoodPrint("1 kg bef").then((response) => {
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getIngredients();
    }, [])

    return (<div>
            <Header fixed="top"/>
            <Intro/>
            <Row className="hero-row">
                <MidText/>
            </Row>
            <Row >
                <Final/>
            </Row>
        </div>
    )
}


export default HomePage;