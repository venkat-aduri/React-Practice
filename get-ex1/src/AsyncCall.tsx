import axios from 'axios';
import url from "./config";

function asyncCall():any{
    return axios.get(url)
};

export default asyncCall;