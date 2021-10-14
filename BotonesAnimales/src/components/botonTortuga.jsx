import React from 'react'

export default function BotonTortuga({insertImg}) {
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxR_gZgwHBTHW7jk2FL5ylBXIlZQ9sXS1LoziNdif8ucBx8CwKf8mHx3Ny9chH5u_H93Qfr8&usqp=CAc";
    return (
      
        <input type= 'button'  onClick={() => insertImg(url)} value = "TORTUGA" ></input>
      
    )
}
