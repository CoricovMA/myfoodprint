import React, {useEffect} from 'react';
import {Button, Row, Col, Container, Jumbotron} from 'react-bootstrap'
import axios from 'axios'
import {apiURL} from '../config/env'
import {apiGetFoodPrint, ping} from '../Api'
import Header from '../Components/Header'
import Intro from '../Components/HeroText'
import MidText from '../Components/MidText'
import AOS from "aos";
import 'aos/dist/aos.css';
import ChefImages from "../Components/ChefImages";
import Trees from "../Components/Trees";
import Final from "../Components/Final";

function HomePage() {
    axios.defaults.baseURL = apiURL;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const getIngredients = () => {
        apiGetFoodPrint("1 kg bef").then((response) => {
            console.log(response.data.ingredients);
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
            <Row>
                <MidText/>
            </Row>
            <Row>
                <Final/>
            </Row>
        </div>
    )
}


export default HomePage;