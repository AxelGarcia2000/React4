import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibreriaContext} from '../Context/LibreriaContext'

export default function Libros () {
        const {catalogo, agregar} = useContext(LibreriaContext);
        return (
            <div className="info">
                <h4 style={{marginBottom:'10vmin' }}>Libros disponibles</h4>
                  {
                    <Table>
                    <thead>
                      <tr>
                        <th>Codigo</th>
                        <th>Titulo</th>
                        <th>Idioma</th>
                        <th></th>
                        </tr>
                        </thead>
                        <tbody>
                       {
                        catalogo.map((a,b)=>{                     
                        return(<tr x={b}>
                          <td>{a.codigo}</td>
                          <td>{a.titulo}</td>
                          <td>{a.idioma}</td>
                          <td>{<Button variant="dark" disabled={a.desactivado} onClick={()=>agregar(a)}>Agregar</Button>}</td>
                          </tr>)
                        })
                       }                      
                        </tbody>
                        </Table>               
                        }
                        </div>
                   )

                 }

