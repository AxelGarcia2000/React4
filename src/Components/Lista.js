import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LibreriaContext} from '../Context/LibreriaContext'
import {useContext} from 'react';

const Lista=()=>{
  const {wishList, eliminar} = useContext(LibreriaContext);
    return ( 
        <div className="Listadeproductos">
                <h3 style={{marginBottom:'10vmin' }}>Lista</h3>
                  {
                    wishList.length===0? 
                    <h4>Carrito vacio</h4>:
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
                          wishList.map((x,z)=>{                        
                          return(<tr p={z}>
                            <td>{x.codigo}</td>
                            <td>{x.titulo}</td>
                            <td>{x.idioma}</td>
                            <td>{<Button variant="dark"  onClick={()=>eliminar(x)}>Borrar</Button>}</td>
                            </tr>)  
                          })
                        }                        
                      </tbody>
                      </Table>}                                             
        </div>
     );
}
export default Lista;