import React, { Component } from 'react'
import Header from './Header';
import unndou from '../images/unndou.jpg'
import sige from '../images/sige.jpg'
import ryogo from '../images/ryogo.jpg'
import tamu from '../images/tamu.jpg'
import disney from '../images/disney.jpg'
import kiss from '../images/kiss.jpg'
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
        <div style={{width: '240px'}}>
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
        <div  style={{width: '80%'}}>
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
    <p  className='titleSize2'>夏のイベントで忘れてはならない運動会！！
    <br/>最大級の大会（夏の陣とマガジン杯）後、学年問わずフランクに皆と関われる絶好の日！
    <br/>夏の最高な思い出として残ること間違いなし。運動会では4チームに分かれて選手・マネージャー問わず本気で戦います🔥
    <br/>種目は大繩、障害物競走、借り物競争、二人三脚、騎馬戦、綱引き、学年対抗リレーなど✨各チームで作った独自のユニフォームを着て、優勝を目指します🚩
    <br/>優勝チームには豪華プレゼントはもちろん、MVPや新人賞、グッドペア賞（恋の予感…💛）などの個人賞も盛りだくさん！
    <br/>2019年の夏では、なんと新人賞でAirPodsをゲットした選手が！とても羨ましい素敵な賞品ですよね😀
    <br/>皆さんもぜひ新人賞を狙いにきてください⭐サッカー以外でも絆を深められる貴重な時間を共に過ごしましょう！！</p>
    <SimpleSlider1/>
  </div>
)
const About1 = () => (
  <div>
    <h1 className='title'>バーベキュー</h1>
    <p  className='titleSize2'>バーベキューの説明</p>
    <SimpleSlider1/>
  </div>
)

const About2 = () => (
  <div>
    <h1 className='title'>新歓</h1>
    <p  className='titleSize2'>春の大企画？！新歓は主に4月～６月の3か月間で行われます。大きな活動としては、ビラ配り、新歓コンパ、新歓BBQ 、新歓合宿かあります！ビラ配りは早稲田学内はもちろん、マネージャーはインカレなので様々な大学に赴いてビラを配ります🏃‍♂️🏃‍♂️🌬他サーとは戦争状態ですね🔥そしてメインイベントといってもいい新歓コンパ！リコサ最大の特徴はあのスポーツバーのHUBを貸し切ってしまいます！新歓ムービーを流したり、現役生とお話ししたりと充実した時間を味わえます☺️
    <br/>新歓合宿はリコサに入会してくれた新入生と仲を深める最高の機会です！昼は学年別で試合に出て、夜は新入生が主役のレクをします🌸リコサでは最大人数が参加する合宿のうちの1つですね😆</p>
    <SimpleSlider1/>
  </div>
)

const About3 = () => (
  <div>
    <h1 className='title'>りこさんぽ</h1>
    <p  className='titleSize2'>
      <br/>2019年の夏、突如新企画として現れた「りこさんぽ」🏃‍♂️(他サーのパクリという噂も笑)
      <br/>ミッションをクリアしながらする都内散策は楽しくないはずがない！チームに分けてミッションに挑むので仲間との絆が深まること間違いなし！
      <br/>協力しながら楽しく都内をさんぽしちゃおう！
      <br/>ミッションクリアのポイントによって豪華景品ももらえちゃう🎁
      <br/>リコサに多い地方出身勢と都内出身勢のギャップも隠れた見どころだったりします🧐</p>
    <SimpleSlider1/>
  </div>
)

const About4 = () => (
  <div>
    <h1 className='title'>クリスマスカップ</h1>
    <p  className='titleSize2'>毎年12月に行われる大会、通称『クリカ』🎄🎅🍗
    <br/>例年茨城県の波崎にて大会が開催されます。
    <br/>新体制で臨む初めての大会であると共に、３年生と一緒に参加できる最後の大会です😭
    <br/>寒空の下でサッカーをした後は、３年生同士でのプレゼント交換🎁や、1,2年生からのアルバムのプレゼント、新幹事長作成のムービー
    <br/>上映🎥などを行います。同期,後輩からの感動的なメッセージ💌によって号泣する人多発です❗️❗️❗️
    <br/>お世話になった３年生に感謝の気持ちを伝えましょう❗️❗️❗️</p>
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
    <p  className='titleSize2'>夏休み最初の合宿としてみんなお待ちかね『夏の陣』があります！☀️
    <br/>毎年8月下旬に群馬県の観光地草津にて2泊3日で開催される大会合宿です！✨✨
    <br/>我がサークルからは、毎年3-4チームで参加するので、みんなが試合に出ることができます👍
    <br/>さらに、マネージャーのミニフットサル大会も行われるので、マネージャーもしっかり楽しむことができます👍👍
    <br/>昨年はAチームが大会優勝し、一昨年はマネがミニ大会優勝しました🏆👏
    <br/>草津は観光地でもあるので、試合後はみんなで遊びに行くことができます〜💨💨
    <br/>学年問わず仲が深まるとっても楽しい合宿、ぜひりこさに入って体感してください！！！</p>
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
    <p  className='titleSize2'>学内戦とは、早稲田大学で1番強いサッカーサークルを決める戦いです🏅
    <br/>2〜9月にかけて各大学で行われ、勝ち上がると、大学同好会最高峰かつ唯一のJFA公認大会である「アットホームカップ インディペンデンスリーグ」への出場権が与えられます✨✨ 
    <br/>早稲田大学には、関東屈指の強豪サークルが数多く存在するため、毎年白熱した試合が繰り広げられています。
    <br/>今年も熱い戦いになること間違いなし🔥🔥 </p>
    <SimpleSlider1/>
  </div>
)

const About12 = () => (
  <div>
    <h1 className='title'>学年合宿</h1>
    <p  className='titleSize2'>春休みに入って最初の大会合宿が、世代別No.1を決める学年別大会の学年合宿です！！
    <br/>学年ごとに日程はずれており、１年生は、新歓合宿以来の自分たちの代だけでの試合なので、お互いを知ったうえで前よりものびのびとプレーできます👌
    <br/>この大会で勝ち上がると、学年別championshipに進めます🔥
    <br/>２年生は、この合宿を通して、改めて仲間との絆を認識し、新チームに向けて雰囲気良く、幸先いいスタートダッシュを切れる大会になっています😊
    <br/>また、自分たちの学年同士でしか話せないこともたくさん話せますし、仲間の意外な素顔も新たに知れるかもしれません！😁
    <br/>学年合宿は、学年同士の仲が深まり、これからのりこさ生活をより楽しくし、世代別のNo.1も目指せる盛りだくさんの大会合宿となっています！✨✨</p>
    <SimpleSlider1/>
  </div>
)

export default Schedule