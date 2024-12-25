import React from "react";
import './Styles.css';
import homeimg from '../assests/cuate.png';

const Home = () =>{
    return(
        <div className="home">
            <div className="container-home">
            <h1>Didn't attend the classes! Worried about your internals
                and semester examinations. Here is the solution for it.
            </h1>
            <button className='btn' ><a href="#materails">Get Notes</a></button>
            </div>
            <div className="container-img">
                <img src = {homeimg} alt= 'home' />
            </div>
        </div>
    )
}
export default Home;