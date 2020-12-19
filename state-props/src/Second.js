import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles, withStyles, TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(5),
        padding: theme.spacing(2)
    },
    tableHead:{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function Second(props) {
    const {key1} = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper className={classes.root}> 
                <TableContainer>
                    <Table>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <StyledTableCell>SNO</StyledTableCell>
                                <StyledTableCell>P_ID</StyledTableCell>
                                <StyledTableCell>P_NAME</StyledTableCell>
                                <StyledTableCell>P_COST</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {key1.map((element,index)=>(
                                <StyledTableRow>
                                    <StyledTableCell>{index+1 }</StyledTableCell>
                                    <StyledTableCell>{element.p_id}</StyledTableCell>
                                    <StyledTableCell>{element.p_name}</StyledTableCell>
                                    <StyledTableCell>{element.p_cost}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </React.Fragment>
    );
}

export default Second;