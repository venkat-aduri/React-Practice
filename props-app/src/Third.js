import React from 'react';

function Third(props){
    const {key1,key2,key3} = props;

    return(
        <React.Fragment>
            <h1>{key1}</h1>
            <h2>{key2}</h2>
            <h3>{key3}</h3>
        </React.Fragment>
    )

};

export default Third;