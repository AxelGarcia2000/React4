import React, {createContext, useState} from 'react'
export const LibreriaContext = createContext();

const Libreria=(props)=>{
  const [wishList,setWishList]= useState([]);
  const [catalogo,setCatalogo]= useState([
    {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
    {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},     
    {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
    {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
  ]); 
   const  eliminar=(libro)=>{
    let b= catalogo;    
    let i= b.findIndex((a)=>a.codigo===libro.codigo);
    b[i].desactivado=false;
    let d= wishList.filter(c=>c.codigo!==libro.codigo)
    setWishList(d);
    setCatalogo(b); 
  }  
  const  agregar=(libro)=>{
      let b= catalogo;      
      let i= b.findIndex((a)=>a.codigo===libro.codigo);
      b[i].desactivado=true;
      let c =[...wishList,libro];
      c= c.sort((x,z)=>x.codigo>z.codigo)
      setWishList(c);
      setCatalogo(b);
    }   
    return(
        <LibreriaContext.Provider
            value={{
                catalogo,
                wishList,
                eliminar,
                agregar
            }}>
                {props.children}
       </LibreriaContext.Provider>
    );
}

export default Libreria;