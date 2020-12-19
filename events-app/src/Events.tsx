// import { Button, Snackbar } from '@material-ui/core';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import React, { useState } from 'react';

// function Alert(props: AlertProps) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   }

// function Events() {

//     const [open, setOpen] = useState(false);

//     function myFun():void{
//         setOpen(true);
//     }

//     function handleClose():void{
//         setOpen(false);
//     }

//     return (
//         <React.Fragment>
//             <Button 
//             variant="outlined" 
//             color="secondary"
//             onClick={myFun}>ClickMe</Button>
//             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="success">
//                 This is a success message!
//                 </Alert>
//             </Snackbar>
//         </React.Fragment>
//     );
// }

// export default Events;

import { Button } from '@material-ui/core';
import React from 'react';

function Events() {

    function login(arg1:string, arg2:string):void{
        if(arg1=="admin" && arg2=="admi"){
            alert("Login Success");
        }else{
            alert("Login Fail");
        }
    }
    return (
        <div>
            <Button 
            variant="outlined" 
            color="primary"
            onClick={()=>{login("admin","admin")}}>Login</Button>
        </div>
    );
}

export default Events;