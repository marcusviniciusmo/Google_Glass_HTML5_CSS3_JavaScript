import axios from 'axios';

export default axios.create({
    baseURL: "https://servicodados.ibge.gov.br/",
    headers: {
        "Content-type": "application-json"
    }
});