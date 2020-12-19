// import React, { useState } from 'react';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// function State(){
    
//     const [sub,setSub]= useState("ReactJS");
    
//     return(
//         <React.Fragment>
//             <Typography variant="h6" color="secondary">
//                 {sub}
//             </Typography>

//             <br></br><br></br>
//             <Button 
//                 variant="contained"
//                 color="primary"
//                 onClick={()=>{setSub("React Native")}}>Change</Button>
//         </React.Fragment>
//     )

// };

// export default State;






import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    c1:{
        backgroundColor : "grey"
    },
    c2:{
        backgroundColor : "pink"
    }
});

function State(){
    const [p_id,setPid] = useState(111);
    const [p_name,setPname] = useState("p_one");
    const [p_cost,setPcost] = useState(10000);

    // function myFun(){
    //     setPid(123);
    //     setPname("product_one");
    //     setPcost(100000);
    // }

    let myFun = () => {
        setPid(123);
        setPname("product_one");
        setPcost(100000);
    }

    const classes = useStyles();

    return(
        <React.Fragment>
            <TableContainer>
                <Table>
                    <TableHead className={classes.c1}>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6" color="primary">P_ID</Typography>
                            </TableCell>
                            
                            <TableCell>
                                <Typography variant="h6" color="primary">P_NAME</Typography>
                            </TableCell>
                            
                            <TableCell>
                                <Typography variant="h6" color="primary">P_COST</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.c2}>
                        <TableRow>
                            <TableCell><Typography variant="subtitle2" color="secondary">{p_id}</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2" color="secondary">{p_name}</Typography></TableCell>
                            <TableCell><Typography variant="subtitle2" color="secondary">{p_cost}</Typography></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button onClick={myFun} variant="contained" color="primary">Change</Button>
        </React.Fragment>
    )
};

export default State;