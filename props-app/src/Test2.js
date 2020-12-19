import React from 'react';

function Test2(props){
    const {key1,key2} = props;

    return(
        <React.Fragment>
            {key1.map((element,index)=>(
                <p>{element}...{index}</p>
            ))}

            <br></br>
            {key2.key1}
            <br></br>
            {key2.key2}
            <br></br>
            {key2.key3}
            <br></br>
            {JSON.stringify(key2)}
        </React.Fragment>
    )

};

export default Test2;