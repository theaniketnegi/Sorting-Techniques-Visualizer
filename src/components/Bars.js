import React from 'react'

export default function Bars(props) {

    let x = [];

    for( let i=0; i<props.array.length; i++ ){
        x.push( 
        
            <div key={i} className='mx-1' style={{ backgroundColor: '#e32447', height: (props.array[i]+'px'), width: '12px', flexDirection: 'row'}}></div>
        );
    }

  return (
    <div className='container ' style={{ display: 'flex', alignContent: 'center'}}>
      {x}
    </div>
  )
}
