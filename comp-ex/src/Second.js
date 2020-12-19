import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

function Second(){
    return(
        <React.Fragment>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="error">Error</Button>
            <Button disabled>Disabled</Button>

            <br/><br/><br/><br/>
            <Button variant="contained">Default</Button>
            <Button color="primary" variant="contained">Primary</Button>
            <Button color="secondary" variant="contained">Secondary</Button>
            <Button color="error" variant="contained">Error</Button>
            <Button disabled variant="contained">Disabled</Button>

            <br/><br/><br/><br/>
            <Button variant="outlined">Default</Button>
            <Button color="primary" variant="outlined">Primary</Button>
            <Button color="secondary" variant="outlined">Secondary</Button>
            <Button color="error" variant="outlined">Error</Button>
            <Button disabled variant="outlined">Disabled</Button>

            <br></br><br></br>
            <Button variant="contained" size="small" color="secondary">Button</Button>
            <Button variant="contained" size="medium" color="secondary">Button</Button>
            <Button variant="contained" size="large" color="secondary">Button</Button>

            <br></br><br></br>
            <IconButton color="primary">
                <AccountCircleIcon fontSize="large"/>
            </IconButton>
            <IconButton color="secondary" >
                <HomeIcon fontSize="large"/>
            </IconButton>
        

            <br></br><br></br>
            <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    startIcon={<AccountCircleIcon/>}>Account</Button>

            <Button
                    varinat="outlined"
                    color="error"
                    size="large"
                    endIcon={<HomeIcon/>}>Home</Button>



        </React.Fragment>
    )

};

export default Second;