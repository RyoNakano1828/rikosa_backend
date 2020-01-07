import React, { Component } from 'react'
import Header from './Header';
import unndou from '../unndou.jpg'
import sige from '../sige.jpg'
import ryogo from '../ryogo.jpg'
import tamu from '../tamu.jpg'
import disney from '../disney.jpg'
import kiss from '../kiss.jpg'
import Slider from "react-slick";
import { BrowserRouter, Route, Link } from 'react-router-dom'

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
          <img src={unndou} alt="Logo" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={sige} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={tamu} alt="Kubo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={ryogo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={disney} alt="Logo" style={{width: '95%',margin: 'auto'}}/>
        </div>
        <div>
         <img src={kiss} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }
const Schedule = () => (
  <div>
    <Header menu="活動内容"/>
    <h1>活動紹介</h1>
    <SimpleSlider/>
    <BrowserRouter>
      <div style={{display: 'flex', width: '100%', paddingTop: '20px'}}>
        <div style={{width: 200}}>
        <ul>
        <li><Link to='/schedule'>運動会</Link></li>
        <li><Link to='/schedule/1'>バーベキュー</Link></li>
        <li><Link to='/schedule/2'>新歓</Link></li>
        <li><Link to='/schedule/3'>りこさんぽ</Link></li>
        <li><Link to='/schedule/4'>クリスマスカップ</Link></li>
        <li><Link to='/schedule/5'>稲穂カップ</Link></li>
        <li><Link to='/schedule/6'>スプリングカップ</Link></li>
        <li><Link to='/schedule/7'>夏の陣</Link></li>
        <li><Link to='/schedule/8'>マガジン杯</Link></li>
        <li><Link to='/schedule/9'>理工系リーグ・カップ</Link></li>
        <li><Link to='/schedule/10'>新関東リーグ・カップ</Link></li>
        <li><Link to='/schedule/11'>学内戦</Link></li>
        <li><Link to='/schedule/12'>学年合宿</Link></li>
        </ul>
        </div>
        <div>
        <Route exact path='/schedule' component={Home} />
        <Route path='/schedule/1' component={About1} />
        <Route path='/schedule/2' component={About2} />
        <Route path='/schedule/3' component={About3} />
        <Route path='/schedule/4' component={About4} />
        <Route path='/schedule/5' component={About5} />
        <Route path='/schedule/6' component={About6} />
        <Route path='/schedule/7' component={About7} />
        <Route path='/schedule/8' component={About8} />
        <Route path='/schedule/9' component={About9} />
        <Route path='/schedule/10' component={About10} />
        <Route path='/schedule/11' component={About11} />
        <Route path='/schedule/12' component={About12} />
      </div>
      </div>
    </BrowserRouter>
  </div>
)

const Home = () => (
  <div>
    <h1>りこさ大運動会</h1>
  </div>
)
const About1 = () => (
  <div>
    <h2>１月</h2>
    <p>１月の活動を紹介するページです</p>
  </div>
)

const About2 = () => (
  <div>
    <h2>２月</h2>
    <p>２月の活動を紹介するページです</p>
  </div>
)

const About3 = () => (
  <div>
    <h2>３月</h2>
    <p>３月の活動を紹介するページです</p>
  </div>
)

const About4 = () => (
  <div>
    <h2>４月</h2>
    <p>４月の活動を紹介するページです</p>
  </div>
)

const About5 = () => (
  <div>
    <h2>５月</h2>
    <p>５月の活動を紹介するページです</p>
  </div>
)

const About6 = () => (
  <div>
    <h2>６月</h2>
    <p>６月の活動を紹介するページです</p>
  </div>
)

const About7 = () => (
  <div>
    <h2>７月</h2>
    <p>７月の活動を紹介するページです</p>
  </div>
)

const About8 = () => (
  <div>
    <h2>８月</h2>
    <p>８月の活動を紹介するページです</p>
  </div>
)

const About9 = () => (
  <div>
    <h2>９月</h2>
    <p>９月の活動を紹介するページです</p>
  </div>
)

const About10 = () => (
  <div>
    <h2>１０月</h2>
    <p>１０月の活動を紹介するページです</p>
  </div>
)

const About11 = () => (
  <div>
    <h2>１１月</h2>
    <p>１１月の活動を紹介するページです</p>
  </div>
)

const About12 = () => (
  <div>
    <h2>１２月</h2>
    <p>１２月の活動を紹介するページです</p>
  </div>
)

export default Schedule