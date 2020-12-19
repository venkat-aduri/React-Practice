import React from 'react';
import Typography from '@material-ui/core/Typography';


function First(){
    return(
        <div>
            <Typography variant="h1" color="initial">Hello_1</Typography>
            <Typography variant="h2" color="inherit" align="center">Hello_2</Typography>
            <Typography variant="subtitle1" color="primary" align="right">Hello_3</Typography>
            <Typography variant="body1" color="error">Hello_4</Typography>
            <Typography variant="h4" color="secondary">hello_5</Typography>
            <Typography variant="h6" color="textPrimary">Hello_6</Typography>
            <Typography variant="subtitle2" color="textSecondary">Hello_7</Typography>
        </div>
    )

};

export default First;