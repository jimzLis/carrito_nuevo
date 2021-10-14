import React from 'react'
import '../App.css';

export function Multiplicaciones({listResult, multiplicador}) {
    let i = 1;
    return (
        <div id="tabla">
            <table>
                <tbody>
                        {listResult.map((result) => {
                            return ( <tr>
                                    <th>{multiplicador}</th>
                                    <th>X</th>
                                    <th>{i++}</th>
                                    <th>=</th>
                                    <th>{result}</th>
                               </tr>)
                        })}
                   
                </tbody>
            </table>
  
        </div>
    
    )
    
}
