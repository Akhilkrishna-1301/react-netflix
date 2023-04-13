import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='Banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className="banner_button">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </h1>

        </div>
        <div className="fade-bottom"></div>  
    </div>
  )
}

export default Banner