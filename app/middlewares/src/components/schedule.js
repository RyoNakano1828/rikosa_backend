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

function SimpleSlider1 (props) {
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
    <BrowserRouter>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '30%'}}>
        <ul className='paddingMin'>
        <li><Link to='/schedule'><p className='eventSize'>運動会</p></Link></li>
        <li><Link to='/schedule/1'><p className='eventSize'>バーベキュー</p></Link></li>
        <li><Link to='/schedule/2'><p className='eventSize'>新歓</p></Link></li>
        <li><Link to='/schedule/3'><p className='eventSize'>りこさんぽ</p></Link></li>
        <li><Link to='/schedule/4'><p className='eventSize'>クリスマスカップ</p></Link></li>
        <li><Link to='/schedule/5'><p className='eventSize'>稲穂フェスタ</p></Link></li>
        <li><Link to='/schedule/6'><p className='eventSize'>スプリングカップ</p></Link></li>
        <li><Link to='/schedule/7'><p className='eventSize'>夏の陣</p></Link></li>
        <li><Link to='/schedule/8'><p className='eventSize'>マガジン杯</p></Link></li>
        <li><Link to='/schedule/9'><p className='eventSize'>理工系リーグ・カップ</p></Link></li>
        <li><Link to='/schedule/10'><p className='eventSize'>新関東リーグ・カップ</p></Link></li>
        <li><Link to='/schedule/11'><p className='eventSize'>学内戦</p></Link></li>
        <li><Link to='/schedule/12'><p className='eventSize'>学年合宿</p></Link></li>
        </ul>
        </div>
        <div  style={{width: '70%'}}>
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
    <h1 className='title'>りこさ大運動会</h1>
    <p style={{margin: 10}} className='titleSize2'>夏のイベントで忘れてはならない運動会！！最大級の大会（夏の陣とマガジン杯）後、学年問わずフランクに皆と関われる絶好の日！　夏の最高な思い出として残ること間違いなし。運動会では4チームに分かれて選手・マネージャー問わず本気で戦います🔥種目は大繩、障害物競走、借り物競争、二人三脚、騎馬戦、綱引き、学年対抗リレーなど✨各チームで作った独自のユニフォームを着て、優勝を目指します🚩優勝チームには豪華プレゼントはもちろん、MVPや新人賞、グッドペア賞（恋の予感…💛）などの個人賞も盛りだくさん！2019年の夏では、なんと新人賞でAirPodsをゲットした選手が！とても羨ましい素敵な賞品ですよね😀皆さんもぜひ新人賞を狙いにきてください⭐サッカー以外でも絆を深められる貴重な時間を共に過ごしましょう！！</p>
    <SimpleSlider1/>
  </div>
)
const About1 = () => (
  <div>
    <h1 className='title'>バーベキュー</h1>
    <p  className='titleSize2'>バーベキューの説明</p>
    <p  className='titleSize2'>バーベキューの説明</p>
    <p  className='titleSize2'>バーベキューの説明</p>
    <p  className='titleSize2'>バーベキューの説明</p>
    <p  className='titleSize2'>バーベキューの説明</p>
    <SimpleSlider1/>
  </div>
)

const About2 = () => (
  <div>
    <h1 className='title'>新歓</h1>
    <p  className='titleSize2'>新歓の説明</p>
    <p  className='titleSize2'>新歓の説明</p>
    <p  className='titleSize2'>新歓の説明</p>
    <p  className='titleSize2'>新歓の説明</p>
    <p  className='titleSize2'>新歓の説明</p>
    <SimpleSlider1/>
  </div>
)

const About3 = () => (
  <div>
    <h1 className='title'>りこさんぽ</h1>
    <p  className='titleSize2'>りこさんぽの説明</p>
    <p  className='titleSize2'>りこさんぽの説明</p>
    <p  className='titleSize2'>りこさんぽの説明</p>
    <p  className='titleSize2'>りこさんぽの説明</p>
    <p  className='titleSize2'>りこさんぽの説明</p>
    <SimpleSlider1/>
  </div>
)

const About4 = () => (
  <div>
    <h1 className='title'>クリスマスカップ</h1>
    <p  className='titleSize2'>クリスマスカップの説明</p>
    <p  className='titleSize2'>クリスマスカップの説明</p>
    <p  className='titleSize2'>クリスマスカップの説明</p>
    <p  className='titleSize2'>クリスマスカップの説明</p>
    <p  className='titleSize2'>クリスマスカップの説明</p>
    <SimpleSlider1/>
  </div>
)

const About5 = () => (
  <div>
    <h1 className='title'>稲穂フェスタ</h1>
    <p  className='titleSize2'>稲穂フェスタの説明</p>
    <p  className='titleSize2'>稲穂フェスタの説明</p>
    <p  className='titleSize2'>稲穂フェスタの説明</p>
    <p  className='titleSize2'>稲穂フェスタの説明</p>
    <p  className='titleSize2'>稲穂フェスタの説明</p>
    <SimpleSlider1/>
  </div>
)

const About6 = () => (
  <div>
    <h1 className='title'>スプリングカップ</h1>
    <p  className='titleSize2'>スプリングカップの説明</p>
    <p  className='titleSize2'>スプリングカップの説明</p>
    <p  className='titleSize2'>スプリングカップの説明</p>
    <p  className='titleSize2'>スプリングカップの説明</p>
    <p  className='titleSize2'>スプリングカップの説明</p>
    <SimpleSlider1/>
  </div>
)

const About7 = () => (
  <div>
    <h1 className='title'>夏の陣</h1>
    <p  className='titleSize2'>夏の陣の説明</p>
    <p  className='titleSize2'>夏の陣の説明</p>
    <p  className='titleSize2'>夏の陣の説明</p>
    <p  className='titleSize2'>夏の陣の説明</p>
    <p  className='titleSize2'>夏の陣の説明</p>
    <SimpleSlider1/>
  </div>
)

const About8 = () => (
  <div>
    <h1 className='title'>マガジン杯</h1>
    <p  className='titleSize2'>マガジン杯の説明</p>
    <p  className='titleSize2'>マガジン杯の説明</p>
    <p  className='titleSize2'>マガジン杯の説明</p>
    <p  className='titleSize2'>マガジン杯の説明</p>
    <p  className='titleSize2'>マガジン杯の説明</p>
    <SimpleSlider1/>
  </div>
)

const About9 = () => (
  <div>
    <h1 className='title'>理工系リーグ・カップ</h1>
    <p  className='titleSize2'>理工系リーグ・カップの説明</p>
    <p  className='titleSize2'>理工系リーグ・カップの説明</p>
    <p  className='titleSize2'>理工系リーグ・カップの説明</p>
    <p  className='titleSize2'>理工系リーグ・カップの説明</p>
    <p  className='titleSize2'>理工系リーグ・カップの説明</p>
    <SimpleSlider1/>
  </div>
)

const About10 = () => (
  <div>
    <h1 className='title'>新関東リーグ・カップ</h1>
    <p  className='titleSize2'>新関東リーグ・カップの説明</p>
    <p  className='titleSize2'>新関東リーグ・カップの説明</p>
    <p  className='titleSize2'>新関東リーグ・カップの説明</p>
    <p  className='titleSize2'>新関東リーグ・カップの説明</p>
    <p  className='titleSize2'>新関東リーグ・カップの説明</p>
    <SimpleSlider1/>
  </div>
)

const About11 = () => (
  <div>
    <h1 className='title'>学内戦</h1>
    <p  className='titleSize2'>学内戦の説明</p>
    <p  className='titleSize2'>学内戦の説明</p>
    <p  className='titleSize2'>学内戦の説明</p>
    <p  className='titleSize2'>学内戦の説明</p>
    <p  className='titleSize2'>学内戦の説明</p>
    <SimpleSlider1/>
  </div>
)

const About12 = () => (
  <div>
    <h1 className='title'>学年合宿</h1>
    <p  className='titleSize2'>学年合宿の説明</p>
    <p  className='titleSize2'>学年合宿の説明</p>
    <p  className='titleSize2'>学年合宿の説明</p>
    <p  className='titleSize2'>学年合宿の説明</p>
    <p  className='titleSize2'>学年合宿の説明</p>
    <SimpleSlider1/>
  </div>
)

export default Schedule