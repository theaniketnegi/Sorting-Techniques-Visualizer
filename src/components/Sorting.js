import React from 'react'
import Bar from './Bar'
import Bars from './Bars'


function Control(props) {



    return (
        <nav className='bg-dark py-3'>
            <div className='container text-light'>
                <label className='mx-1' htmlFor="techniques">Technique: </label>
                <select className="form-select form-select-sm mx-1 my-3" name='techniques' id='techniques' aria-label='Select Technique:'>
                    <option value="bubble">Bubble Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="merge">Merge Sort</option>
                    <option value="quick">Quick Sort</option>
                </select>

                <button className='btn btn-primary mx-2' onClick={props.generate}>Generate Array</button>
                <button className='btn btn-primary mx-2' >Sort</button>
            </div>
        </nav>
    )
}



export default function Sorting(props) {
    return (
        <>
            <Control generate={props.generate} />
            <div className='bg-light'>
                <br /><br />


                <Bars array={props.array} />

                {/* {console.log(props.array)} */}

            </div>
        </>
    )
}
