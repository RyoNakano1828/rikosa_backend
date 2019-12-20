import React from 'react'
import logo from '../logo.jpg'
import kubo from '../kubo.jpg'
import Header from './Header';
import Slider from "react-slick";
import '../App.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider (props) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      draggable: true,
      centerModel: true,
    };
   
    return (
      <Slider {...settings}>
        <div>
          <img src={logo} alt="Logo" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={logo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={kubo} alt="Kubo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={logo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={logo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>
        </div>
        <div>
         <img src={logo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }


export default class Home extends React.Component {
  
  render () {
    return (<div style={{width: '100%'}}>
      <Header menu="ようこそ"/>
      <SimpleSlider/>
      <div className='buttons'>
        <a href={'/members'} className='button buttonx'><span>Members</span></a>
        <a href={'/result'} className='button buttonx'><span>Game Results</span></a>
        <a href={'/schedule'} className='button buttonx'><span>Events</span></a>
        <a href={'/link'} className='button buttonx'><span>SNS</span></a>
      </div>
      <div className='buttonRight'>
        <a href={'/login'} className='loginButton button'><span>りこさの人はこちら</span></a>
      </div>
    </div>)
  }
}