import React, { Component } from 'react'
import logo from '../logo.jpg'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Schedule = () => (
  <BrowserRouter>
    <div><br /><a href={'/home'}>戻る</a></div>
    <div>
      <ul>
       <li><Link to='/schedule'>Home</Link></li>
       <li><Link to='/schedule/1'>1月</Link></li>
       <li><Link to='/schedule/2'>2月</Link></li>
       <li><Link to='/schedule/3'>3月</Link></li>
       <li><Link to='/schedule/4'>4月</Link></li>
       <li><Link to='/schedule/5'>5月</Link></li>
       <li><Link to='/schedule/6'>6月</Link></li>
       <li><Link to='/schedule/7'>7月</Link></li>
       <li><Link to='/schedule/8'>8月</Link></li>
       <li><Link to='/schedule/9'>9月</Link></li>
       <li><Link to='/schedule/10'>10月</Link></li>
       <li><Link to='/schedule/11'>11月</Link></li>
       <li><Link to='/schedule/12'>12月</Link></li>
      </ul>
      <hr />
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
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h1>サークル活動紹介ページ</h1>
    <img src={logo} alt="Logo" />
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