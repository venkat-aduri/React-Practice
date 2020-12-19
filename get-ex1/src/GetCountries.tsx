import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import url from './config';
import asyncCall from './AsyncCall';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


function GetCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        asyncCall().then((posRes: any)=>{
            setCountries(posRes.data);
         },(errRes: any)=>{
            console.log(errRes);
         })
        
    },[]);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>SNO</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Capital</TableCell>
                        <TableCell>Native Name</TableCell>
                        <TableCell>Population</TableCell>
                        <TableCell>Flag</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countries.map((element:any,index)=>(
                        <TableRow>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{element.name}</TableCell>
                            <TableCell>{element.capital}</TableCell>
                            <TableCell>{element.nativeName}</TableCell>
                            <TableCell>{element.population}</TableCell>
                            <TableCell><LazyLoadImage src={element.flag}
                                                      width="100"
                                                      height="50"
                                                      effect="blur"/></TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>

        </TableContainer>
    );
}

export default GetCountries;