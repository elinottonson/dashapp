import React from 'react';
import BOWcollapse from './bow/BOWcollapse'
import '../styles/collapse.css';


function Get_homepage() {
return (
    <div>
        <iframe className='homepage' src='https://elinottonson.github.io/dashapp/client/src/components/homeHTML.html' />
    </div>
    );
}

function Homepage() {
    return (
        <Get_homepage/>
    );
}
export default Homepage;
