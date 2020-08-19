import axios from 'axios';

export function apiGetFoodPrint(ingredients){
    return axios.get(`foodprint?ingredients=${ingredients}`)
}

export function ping(){
    return axios.get('ping')
}