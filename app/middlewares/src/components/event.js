import React, { Component } from 'react'
import Header from './Header';
import unndou from '../images/unndou.jpg'
import sige from '../images/sige.jpg'
import ryogo from '../images/ryogo.jpg'
import tamu from '../images/tamu.jpg'
import undou3mane from '../images/undou3mane.jpg'
import kiss from '../images/kiss.jpg'
import barbekyu1 from '../images/barbekyu.jpg'
import barbekyu2 from '../images/barbekyu2.jpg'
import barbekyu3 from '../images/barbekyu3.jpg'
import barbekyu4 from '../images/barbekyu4.jpg'
import 新歓 from '../images/新歓.jpg'
import 新歓合宿 from '../images/新歓合宿.jpg'
import りこさんぽ from '../images/りこさんぽ.jpg'
import りこさんぽ2 from '../images/りこさんぽ2.jpg'
import りこさんぽ3 from '../images/りこさんぽ3.jpg'
import りこさんぽ4 from '../images/りこさんぽ4.jpg'
import りこさんぽ5 from '../images/りこさんぽ5.jpg'
import りこさんぽ6 from '../images/りこさんぽ6.jpg'
import りこさんぽ7 from '../images/りこさんぽ7.jpg'
import クリスマス from '../images/クリスマス.jpg'
import クリスマス2 from '../images/クリスマス2.jpg'
import クリスマス3 from '../images/クリスマス3.jpg'
import フェスタ from '../images/フェスタ.jpg'
import フェスタ2 from '../images/フェスタ2.jpg'
import フェスタ3 from '../images/フェスタ3.jpg'
import スプリング from '../images/スプリング.jpg'
import スプリング2 from '../images/スプリング2.jpg'
import スプリング3 from '../images/スプリング3.jpg'
import スプリング4 from '../images/スプリング4.jpg'
import 夏の陣 from '../images/夏の陣.jpg'
import 夏の陣2 from '../images/夏の陣2.jpg'
import マガ杯 from '../images/マガ杯.jpg'
import マガ杯2 from '../images/マガ杯2.jpg'
import マガ杯3 from '../images/マガ杯3.jpg'
import マガ杯4 from '../images/マガ杯4.jpg'
import 理工系 from '../images/理工系.jpg'
import 新関東1 from '../images/新関東.jpg'
import 新関東2 from '../images/新関東2.jpg'
import 学年合宿 from '../images/学年合宿.jpg'
import 学年合宿2 from '../images/学年合宿2.jpg'
import 学年合宿3 from '../images/学年合宿3.jpg'
import 学内戦 from '../images/学内戦.jpg'
import 学内戦2 from '../images/学内戦2.jpg'
import 学内戦3 from '../images/学内戦3.jpg'
import 学内戦4 from '../images/学内戦4.jpg'

import Slider from "react-slick";

import { BrowserRouter, Route, Link } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Undoukai (props) {
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
          <img src={unndou} alt="運動会" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={sige} alt="運動会" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={tamu} alt="田村康太" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={ryogo} alt="菊池りょうご" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
         <img src={kiss} alt="中野凌" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
         <img src={undou3mane} alt="マネージャー" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }

  function Barbekyu (props) {
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
          <img src={barbekyu1} alt="バーベキュー" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={barbekyu2} alt="バーベキュー" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={barbekyu3} alt="バーベキュー" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={barbekyu4} alt="バーベキュー" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }

  function Shinkan (props) {
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
          <img src={新歓} alt="新歓" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={新歓合宿} alt="新歓合宿" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }

  function Rikosanpo (props) {
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
          <img src={りこさんぽ} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={りこさんぽ2} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={りこさんぽ3} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={りこさんぽ4} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={りこさんぽ5} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={りこさんぽ6} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={りこさんぽ7} alt="浅草" style={{width: '95%', margin: 'auto'}}/>
        </div>
      </Slider>
    );
  }

  function Xmas (props) {
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
          <img src={クリスマス} alt="クリスマス" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={クリスマス2} alt="Xmas" style={{width: '95%', margin: 'auto'}}/>
        </div><div>
          <img src={クリスマス3} alt="クリスマスパーティー" style={{width: '95%', margin: 'auto'}}/>
        </div>
      </Slider>
    );
  }

  function Festa (props) {
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
          <img src={フェスタ} alt="稲穂カップ" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={フェスタ2} alt="稲穂フェスタ" style={{width: '95%', margin: 'auto'}}/>
        </div><div>
          <img src={フェスタ3} alt="稲穂" style={{width: '95%', margin: 'auto'}}/>
        </div>
      </Slider>
    );
  }

  function Spring (props) {
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
          <img src={スプリング} alt="すプリンんぐ" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={スプリング2} alt="春合宿" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={スプリング3} alt="春" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={スプリング4} alt="春" style={{width: '95%', margin: 'auto'}}/>
        </div>
      </Slider>
    );
  }

  function Natunojin (props) {
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
          <img src={夏の陣} alt="夏の陣" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={夏の陣2} alt="草津" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }

  function Magahai (props) {
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
          <img src={マガ杯} alt="マガ杯" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={マガ杯2} alt="マガジン杯" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={マガ杯3} alt="マガジン杯" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={マガ杯4} alt="マガ杯" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }

  function Rikokei (props) {
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
          <img src={理工系} alt="理工系カップ" style={{width: '95%', margin: 'auto'}}/>
        </div>
      </Slider>
    );
  }

  function Shinkantou (props) {
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
          <img src={新関東1} alt="新関東リーグ" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={新関東2} alt="新関東カップ" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }

  function Gakunai (props) {
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
          <img src={学内戦} alt="学内戦" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={学内戦2} alt="学内戦" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={学内戦3} alt="学内戦" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={学内戦4} alt="学内戦" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }
  
  function Gakuga (props) {
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
          <img src={学年合宿} alt="学年合宿" style={{width: '95%', margin: 'auto'}}/>
        </div>
        <div>
          <img src={学年合宿2} alt="学年合宿" style={{width: '95%',margin: 'auto'}}/>  
        </div>
        <div>
          <img src={学年合宿3} alt="学年合宿" style={{width: '95%',margin: 'auto'}}/>  
        </div>
      </Slider>
    );
  }






const Event = () => (
  <div>
    <Header menu="活動内容"/>
    <BrowserRouter>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '20%',padding:'10px',textAlign:'center'}}>
        <h2 className='titleSize'>＜活動紹介＞</h2>
        <ul className='paddingMin'>
        <li><Link to='/undou'><p className='eventSize'>運動会</p></Link></li>
        <li><Link to='/barbekyu'><p className='eventSize'>バーベキュー</p></Link></li>
        <li><Link to='/shinkan'><p className='eventSize'>新歓</p></Link></li>
        <li><Link to='/rikosanpo'><p className='eventSize'>りこさんぽ</p></Link></li>
        <li><Link to='/xmas'><p className='eventSize'>クリスマスカップ</p></Link></li>
        <li><Link to='/festa'><p className='eventSize'>稲穂フェスタ</p></Link></li>
        <li><Link to='/spring'><p className='eventSize'>スプリングカップ</p></Link></li>
        <li><Link to='/natunojin'><p className='eventSize'>夏の陣</p></Link></li>
        <li><Link to='/magahai'><p className='eventSize'>マガジン杯</p></Link></li>
        <li><Link to='/rikokei'><p className='eventSize'>理工系リーグ・カップ</p></Link></li>
        <li><Link to='/shinkantou'><p className='eventSize'>新関東リーグ・カップ</p></Link></li>
        <li><Link to='/gakunai'><p className='eventSize'>学内戦</p></Link></li>
        <li><Link to='/gakuga'><p className='eventSize'>学年合宿</p></Link></li>
        </ul>
        </div>
        <div  style={{width: '80%'}}>
        <Route exact path='/undou' component={undoukai} />
        <Route path='/barbekyu' component={barbekyu} />
        <Route path='/shinkan' component={shinkan} />
        <Route path='/rikosanpo' component={rikosanpo} />
        <Route path='/xmas' component={xmas} />
        <Route path='/festa' component={festa} />
        <Route path='/spring' component={spring} />
        <Route path='/natunojin' component={natunojin} />
        <Route path='/magahai' component={magahai} />
        <Route path='/rikokei' component={rikokei} />
        <Route path='/shinkantou' component={shinkantou} />
        <Route path='/gakunai' component={gakunai} />
        <Route path='/gakuga' component={gakuga} />
      </div>
      </div>
    </BrowserRouter>
  </div>
)

const undoukai = () => (
  <div>
    <h1 className='title'>りこさ大運動会</h1>
    <p  className='event'>夏のイベントで忘れてはならない運動会！！
    <br/>最大級の大会（夏の陣とマガジン杯）後、学年問わずフランクに皆と関われる絶好の日！
    <br/>夏の最高な思い出として残ること間違いなし。運動会では4チームに分かれて選手・マネージャー問わず本気で戦います🔥
    <br/>種目は大繩、障害物競走、借り物競争、二人三脚、騎馬戦、綱引き、学年対抗リレーなど✨各チームで作った独自のユニフォームを着て、優勝を目指します🚩
    <br/>優勝チームには豪華プレゼントはもちろん、MVPや新人賞、グッドペア賞（恋の予感…💛）などの個人賞も盛りだくさん！
    <br/>2019年の夏では、なんと新人賞でAirPodsをゲットした選手が！とても羨ましい素敵な賞品ですよね😀
    <br/>皆さんもぜひ新人賞を狙いにきてください⭐サッカー以外でも絆を深められる貴重な時間を共に過ごしましょう！！</p>
    <Undoukai/>
  </div>
)
const barbekyu = () => (
  <div>
    <h1 className='title'>バーベキュー</h1>
    <p  className='event'>毎年、5月の中旬から下旬にかけて行われる、大きな新歓のイベント！
      <br/>毎年100人以上が参加しており、時期が遅いため新歓コンパに乗り遅れた人も大歓迎！！
      <br/>バーベキューしながら、周りとの仲を深めて、りこさに馴染んじゃいましょう！！
      <br/>（川に飛び込む人は、着替えを持ってくることをオススメします）
    </p>
    <Barbekyu/>
  </div>
)

const shinkan = () => (
  <div>
    <h1 className='title'>新歓</h1>
    <p  className='event'>春の大企画？！新歓は主に4月～６月の3か月間で行われます。大きな活動としては、ビラ配り、新歓コンパ、新歓BBQ 、新歓合宿かあります！ビラ配りは早稲田学内はもちろん、マネージャーはインカレなので様々な大学に赴いてビラを配ります🏃‍♂️🏃‍♂️🌬他サーとは戦争状態ですね🔥そしてメインイベントといってもいい新歓コンパ！リコサ最大の特徴はあのスポーツバーのHUBを貸し切ってしまいます！新歓ムービーを流したり、現役生とお話ししたりと充実した時間を味わえます☺️
    <br/>新歓合宿はリコサに入会してくれた新入生と仲を深める最高の機会です！昼は学年別で試合に出て、夜は新入生が主役のレクをします🌸リコサでは最大人数が参加する合宿のうちの1つですね😆</p>
    <Shinkan/>
  </div>
)

const rikosanpo = () => (
  <div>
    <h1 className='title'>りこさんぽ</h1>
    <p  className='event'>
      2019年の夏、突如新企画として現れた「りこさんぽ」🏃‍♂️(他サーのパクリという噂も笑)
      <br/>ミッションをクリアしながらする都内散策は楽しくないはずがない！チームに分けてミッションに挑むので仲間との絆が深まること間違いなし！
      <br/>協力しながら楽しく都内をさんぽしちゃおう！
      <br/>ミッションクリアのポイントによって豪華景品ももらえちゃう🎁
      <br/>リコサに多い地方出身勢と都内出身勢のギャップも隠れた見どころだったりします🧐</p>
    <Rikosanpo/>
  </div>
)

const xmas = () => (
  <div>
    <h1 className='title'>クリスマスカップ</h1>
    <p  className='event'>毎年12月に行われる大会、通称『クリカ』🎄🎅🍗
    <br/>例年茨城県の波崎にて大会が開催されます。
    <br/>新体制で臨む初めての大会であると共に、３年生と一緒に参加できる最後の大会です😭
    <br/>寒空の下でサッカーをした後は、３年生同士でのプレゼント交換🎁や、1,2年生からのアルバムのプレゼント、新幹事長作成のムービー
    <br/>上映🎥などを行います。同期,後輩からの感動的なメッセージ💌によって号泣する人多発です❗️❗️❗️
    <br/>お世話になった３年生に感謝の気持ちを伝えましょう❗️❗️❗️</p>
    <Xmas/>
  </div>
)

const festa = () => (
  <div>
    <h1 className='title'>稲穂フェスタ</h1>
    <p  className='event'>GW頃に開催される強豪が多く集まるのが稲穂フェスタ！！（関西から乗り込んでくるチームも！？）
      <br/>1年生が入部して初の合宿のため、熱心な1年生も毎年数人参加してくれます⚽
      <br/>強豪チームが揃っているため簡単には勝てませんが、大きな刺激を受けること確実！
    </p>
    
    <Festa/>
  </div>
)

const spring = () => (
  <div>
    <h1 className='title'>スプリングカップ</h1>
    <p  className='event'>毎年3月に開催される春休みの集大成。それがスプリングカップ🌸
      <br/>この大会でベスト4に入るとグアムに行けちゃうかも！？
      <br/>3年生引退後の初の1・2年生だけで行う合宿。
      <br/>いつもより少ない人数で臨むため、学年を超えて絆が深まること間違いなし⚡
    </p>
    <Spring/>
  </div>
)

const natunojin = () => (
  <div>
    <h1 className='title'>夏の陣</h1>
    <p  className='event'>夏休み最初の合宿としてみんなお待ちかね『夏の陣』があります！☀️
    <br/>毎年8月下旬に群馬県の観光地草津にて2泊3日で開催される大会合宿です！✨✨
    <br/>我がサークルからは、毎年3-4チームで参加するので、みんなが試合に出ることができます👍
    <br/>さらに、マネージャーのミニフットサル大会も行われるので、マネージャーもしっかり楽しむことができます👍👍
    <br/>昨年はAチームが大会優勝し、一昨年はマネがミニ大会優勝しました🏆👏
    <br/>草津は観光地でもあるので、試合後はみんなで遊びに行くことができます〜💨💨
    <br/>学年問わず仲が深まるとっても楽しい合宿、ぜひりこさに入って体感してください！！！</p>
    <Natunojin/>
  </div>
)

const magahai = () => (
  <div>
    <h1 className='title'>マガジン杯</h1>
    <p  className='event'>夏休み、いや年間を通して最も盛り上がる合宿、それがマガジン杯です🏆🏆🏆 
      <br/>参加する64チームの順位が1~64位まですべて決まるサークル界1の規模の大きい大会で、優勝すれば日本1となります🔥🔥！！ 
      <br/>なんと一昨年はAチームが3位入賞しました！！🥉 
      <br/>そして参加するチームのプレイヤー、マネージャーみんなが髪色を派手に染めて4泊5日を菅平で過ごします！ 
      <br/>また、マガジン杯は夏の陣と同様毎年3-4チームで参加するので全員が試合に出ることができます👍 
      <br/>プレイヤー、マネージャーともに本気で優勝を目指す密度の濃い時間で、派手な髪色で写真を撮ったりなど思い出にも残る合宿まちがいなし！！
    </p>
    <Magahai/>
  </div>
)

const rikokei = () => (
  <div>
    <h1 className='title'>理工系リーグ・カップ</h1>
    <p  className='event'>リーグ戦
      <br/>新体制になって1番初めにあるリーグ戦が理工系リーグ⚽️
      <br/>早理からは2チーム出して、2月3月の2ヶ月間に渡って、他大のサークルや体育会サッカー部と総当たりで試合をします！早理は2019年度は準優勝、2020年度は優勝しました🙌
      <br/>
      <br/>カップ戦
      <br/>この理工系カップは8月に行われ、理工系リーグに所属している全チームが出場し、早理からは例年3チーム出ています！全チームが出場していて、リーグ戦とは違い負けたら終わりの大会なので、理工系に所属しているチームの中での本当の意味での頂点を決める大会になっています！ちなみに、早理は2連覇中です👏
      <br/>全プレーヤー、マネージャーが一体となって試合に臨むので最高の雰囲気を味わえます😆
    </p>
    <Rikokei/>
  </div>
)

const shinkantou = () => (
  <div>
    <h1 className='title'>新関東リーグ・カップ</h1>
    <p  className='event'>サークルサッカー界の真の王者を決める大会がこの、新関東リーグと新関東カップだ。
      <br/>新関東FLに所属する約40のサークルのうち1部リーグに所属できるのはわずか8チーム！
      <br/>新関東リーグは3年生の最後の公式戦で、毎年1部と2部が2チーム入れ替わるため、引退間際の絶対に負けられない大会がここにある🔥
      <br/>運営は各チーム担当者が1名ずつ選出されるのだが、1部リーグ8チーム、2部リーグ8チーム×２、3部リーグ8チーム×２の総当たり戦（全約140試合）の日程とグラウンドと審判を手配するため、大忙し💦
      <br/>昨年、私たち理工サッカー部は学内戦・チャンピオンシップ・マガジン杯で3連敗していたFCGustaに対し、新関東リーグ第1節で4度目の挑戦を試みたが、やはり負けてしまった😢
      <br/>今年こそリベンジを果たしてほしい。
    </p>
    <Shinkantou/>
  </div>
)

const gakunai = () => (
  <div>
    <h1 className='title'>学内戦</h1>
    <p  className='event'>学内戦とは、早稲田大学で1番強いサッカーサークルを決める戦いです🏅
    <br/>2〜9月にかけて各大学で行われ、勝ち上がると、大学同好会最高峰かつ唯一のJFA公認大会である「アットホームカップ インディペンデンスリーグ」への出場権が与えられます✨✨ 
    <br/>早稲田大学には、関東屈指の強豪サークルが数多く存在するため、毎年白熱した試合が繰り広げられています。
    <br/>今年も熱い戦いになること間違いなし🔥🔥 </p>
    <Gakunai/>
  </div>
)

const gakuga = () => (
  <div>
    <h1 className='title'>学年合宿</h1>
    <p  className='event'>春休みに入って最初の大会合宿が、世代別No.1を決める学年別大会の学年合宿です！！
    <br/>学年ごとに日程はずれており、１年生は、新歓合宿以来の自分たちの代だけでの試合なので、お互いを知ったうえで前よりものびのびとプレーできます👌
    <br/>この大会で勝ち上がると、学年別championshipに進めます🔥
    <br/>２年生は、この合宿を通して、改めて仲間との絆を認識し、新チームに向けて雰囲気良く、幸先いいスタートダッシュを切れる大会になっています😊
    <br/>また、自分たちの学年同士でしか話せないこともたくさん話せますし、仲間の意外な素顔も新たに知れるかもしれません！😁
    <br/>学年合宿は、学年同士の仲が深まり、これからのりこさ生活をより楽しくし、世代別のNo.1も目指せる盛りだくさんの大会合宿となっています！✨✨</p>
    <Gakuga/>
  </div>
)

export default Event