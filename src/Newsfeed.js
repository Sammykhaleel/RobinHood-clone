import React from 'react'
import LineGraph from "./LineGraph";
import Stats from './Stats'
import './Newsfeed.css'


function Newsfeed() {
    return (
        <div className='newsfeed'>
            <div className='newsfeed__container'>
                <div className='newsfeed__chartSection'>
                    <div className='newsfeed__portfolio'>
                        <h1>$25,500.65</h1>
                        <p>35.78 (+0.08) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newsfeed