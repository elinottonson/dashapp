import React from 'react';
import BOWcollapse from './bow/BOWcollapse'
import '../styles/collapse.css';


function Get_homepage() {
return (
    <div className="homepage">
        <BOWcollapse />
        <iframe src="https://corenlp.run" className="coreNLP"></iframe>
    </div>
    );
}
function Homepage() {
    return (
        <Get_homepage/>
    );
}
export default Homepage;
