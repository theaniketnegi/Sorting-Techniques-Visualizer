import React from 'react'

export default function Footer(props) {
    return (
        <footer className='bg-dark py-3 mt-5' style={{position: 'fixed', bottom: 0 , width: '100%'}}>
            <div className='container text-light'>
                <h5>Contributed by-</h5>
                <p>Adit Sharma</p>
            </div>
        </footer>
    );
}
