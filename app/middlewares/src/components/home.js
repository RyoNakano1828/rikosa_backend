import React from 'react'
import logo from '../images/logo.jpg'
import undo from '../images/unndou.jpg'
import soccer from '../images/soccer.jpg'
import anju from '../images/anju.jpg'
import ryo from '../images/ryo.jpg'
import tomo from '../images/tomo.jpg'
import yuta from '../images/yuta.jpg'
import daiki from '../images/daiki.jpg';
import twitter from '../images/twitter.jpg';
import sinkanto from '../images/sinkanto.jpg';
import rikokei from '../images/rikokei.jpg';
import supomane from '../images/supomane.jpg';
import insta from '../images/insta.jpg';
import beyond from '../images/beyond.jpg';
import youtube from '../images/youtube.jpg';

import スローガン2018 from '../images/スローガン2018.png'
import スローガン2019 from '../images/スローガン2019.png'
import スローガン2020 from '../images/スローガン2020.png'
import Header from './Header';
import Slider from "react-slick";
import '../App.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider (props) {
    var settings = {
      dots: true,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // accessibility: true,
      autoplay: true,
      draggable: true,
      centerModel: true,
    };
   
    return (
      <Slider {...settings}>
        <div>
          <img src={yuta} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={anju} alt="Kubo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={ryo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={tomo} alt="Logo" style={{width: '95%',margin: 'auto'}}/>
        </div>
        <div>
         <img src={daiki} alt="Logo" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }


export default class Home extends React.Component {
  render () {
    return (
    <div style={{width: '100%'}}>
      <Header menu="ようこそ"/>
      <div style={{display:'flex'}}>
        <div>
          <SimpleSlider/>
          <div className='home_member'>
            <p className='top_title'>最高の仲間たちとともに</p>
            <div style={{display:'flex'}}>
              <div className='top_info'>
                <a href={'/members'}><img style={{width: '100%'}} src={logo}/></a>
              </div>
              <div　className='top_info'>
                <p>プレーヤー約50人、マネージャー約30人の計約80人の最高のメンバーで活動しています。
                <br/>プレーヤーは早稲田大学理工学部生を中心に構成されていますが、中には文系のプレーヤーもいます！
                <br/>マネージャーはインカレで都内の様々な大学から参加してくれています！なんと、マネージャーがインカレの公認サークルは早稲田大学でリコサだけなんです！
                </p>
                <a href='/members'>個性豊かなメンバーたちの紹介はこちらから！</a>
              </div>
            </div>
          </div>
          <div className='home_member'>
            <p className='top_title'>サッカーは本気で</p>
            <div style={{display:'flex'}}>
              <div　className='top_info'>
                <p>常に何事にも全力で向き合うのがリコサの素晴らしいところ。そんなリコサの中でもサッカーに関する熱量は全く違ったものになる🔥
                <br/>練習から本気でぶつかり合い切磋琢磨し、常に最高の結果を求めて活動しています。
                <br/>今年はチームスローガンの「共闘」を胸にプレーヤー、マネージャー全員で一丸となって共に闘っています！
                </p>
                <a href='/result'>そんなリコサの試合結果はこちらから！</a>
              </div>
              <img className='top_info' src={soccer}/>
            </div>
          </div>
          <div className='home_member'>
            <p className='top_title'>遊びは楽しく</p>
            <div style={{display:'flex'}}>
              <img　className='top_info' src={undo}/>
              <div　className='top_info'>
                <p>サッカーだけがリコサじゃない！もちろんイベントだって本気です！！
                <br/>BBQ、都内散策、大運動会、学年ディズニー、旅行、ドライブ...数え始めたらきりがない！
                <br/>こんな遊んだら結局オフ期間もリコサ尽くしになってしまうところが良い意味での悩みの種！！
                </p>
                <a href='/schedule'>みんなの可愛いオフショットはこちらから💁‍♀️</a>
              </div>
            </div>
          </div>
        </div>
        <div className='buttons' style={{width:'400%'}}>
          <img className='width100' src={スローガン2018}/>
          <img className='width100' src={スローガン2019}/>
          <img className='width100' src={スローガン2020}/>
          <div className='top_news'>
            <p className='news_title'>News</p>
            <table className='news_table'>
              <tbody>
                <tr>
                  <td>日付</td>
                  <td>お知らせ</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
                <tr>
                  <td>2020/03/22</td>
                  <td>ホームページを公開しました</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='links'>
            <div className='link_logo' style={{display: 'flex', width:'100%'}}>
              <div className='width50'>
                <p>Twitter</p>
                <a href={'https://twitter.com/w_rikosoccer'}><img className='link_img' src={twitter}/></a>
              </div>
              <div className='width50'>
                <p>Instagram</p>
                <a className='link_img' href={'https://www.instagram.com/wrs__2020/'}><img className='link_img' src={insta}/></a>
              </div>
            </div>
            <div className='link_logo' style={{display: 'flex'}}>
              <div className='width50'>
                <p>理工系</p>
                <a style={{width: '50%'}} href={'http://riko-league.com/'}><img className='link_img' src={rikokei}/></a>
              </div>
              <div className='width50'>
                <p>新関東</p>
                <a style={{width: '50%'}} href={'http://jucfa.com/kanto/'}><img className='link_img' src={sinkanto}/></a>
              </div>
            </div>
            <div className='link_logo' style={{display: 'flex'}}>
              <div className='width50'>
                <p>スポマネ様</p>
                <a style={{width: '50%'}} href={'https://spo-mane-football.com/category2'}><img className='link_img' src={supomane}/></a>
              </div>
              <div className='width50'>
                <p>Beyond様</p>
                <a style={{width: '50%'}} href={'http://be4do.com/'}><img className='link_img' src={beyond}/></a>
              </div>
            </div>
            <div className='link_logo' style={{display: 'flex'}}>
              <div className='width50'>
                <p>2018年度新歓ムービー</p>
                <a style={{width: '50%'}} href={'https://youtu.be/yOnbLBILQZs'}><img className='link_img' src={youtube}/></a>
              </div>
              <div className='width50'>
                <p>2017年度新歓ムービー</p>
                <a style={{width: '50%'}} href={'https://youtu.be/HFbMIJWSkDo'}><img className='link_img' src={youtube}/></a>
              </div>
            </div>
            
          </div>
          {/* <a href={'/members'} className='button buttonx'><span>Members</span></a>
          <a href={'/result'} className='button buttonx'><span>Game Results</span></a>
          <a href={'/schedule'} className='button buttonx'><span>Events</span></a>
          <a href={'/link'} className='button buttonx'><span>SNS</span></a>
          <a href={'/login'} className='loginButton button'><span>りこさの人はこちら</span></a> */}
        </div>
      </div>
    </div>)
  }
}
