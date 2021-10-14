import React from 'react'
import '../App.css'
export default function BotonOso({insertImg}) {
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRkarQvvgi6MYPhhI7eXEci75Wt5C6Q8EplGSl0adLm-HbbzjM4c7E-YDvLpfwnFz_EyEp0AM&usqp=CAc";
    return (
      
        <input type= 'button'  onClick={() => insertImg(url)} value = "OSO" ></input>
      
    )
}
