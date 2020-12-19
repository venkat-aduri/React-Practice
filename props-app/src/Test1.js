import React from 'react';
import Test2 from './Test2';

const arr = ["Angular","React","VueJS"];
const obj = {key1:"Angular",key2:"React",key3:"VueJS"};

function Test1(){
    return(
        <React.Fragment>
            <Test2 key1={arr} key2={obj}/>
        </React.Fragment>
    )

};

export default Test1;