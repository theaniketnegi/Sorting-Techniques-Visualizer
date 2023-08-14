import React from 'react'
import Bar from './Bar';

export default function Bars(props) {

    let x = [];

    for( let i=0; i<20; i++ ){
        x.push( 
        
            <div key={i} className='mx-1' style={{ backgroundColor: 'blue', height: (props.array[i]+'px'), width: '12px', flexDirection: 'row'}}></div>
        );
    }

  return (
    <div className='container ' style={{ display: 'flex'}}>
      {x}
    </div>
  )
}
