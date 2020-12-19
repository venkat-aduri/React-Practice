import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import baseURL from './baseURL';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


function App(){

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get(baseURL).then((posRes:any)=>{
      setLoading(false);
      setCountries(posRes.data);
    },(errRes:any)=>{
      console.log(errRes);
    });
  },[]);

  return(
    <div>
      {loading?
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
             //3 secs
             />:
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
              <TableCell><LazyLoadImage width="100"
                                        height="50"
                                        src={element.flag}
                                        effect="blur"></LazyLoadImage></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>}
    </div>
  )


};

export default App;