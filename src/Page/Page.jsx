import React from 'react';
import './Page.css';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
// import Bg from '../../src/img/bg.png';

const Page = () => {
  return (
    <div className='page__bg'>
      {/* <img src={Bg} alt="" /> */}
        < Navbar />
        < Header />
    </div>
  )
}

export default Page;