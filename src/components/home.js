import React from 'react'
import logo from '../logo.jpg'
import Header from './Header';


export default class Home extends React.Component {

  render () {
    return (<div style={{width: '100%'}}>
      <Header menu="ようこそ"/>
      <h1>早稲田大学理工サッカー部サークル</h1>
      <img src={logo} alt="Logo" style={{width: '100%'}}/>
      <button><br /><a href={'/members'}>→メンバー紹介</a></button>
      <div><br /><a href={'/result'}>→対戦成績🔥</a></div>
      <div><br /><a href={'/schedule'}>→日程スケジュール</a></div>
      <div><br /><a href={'/photo'}>→フォト📷</a></div>
      <div><br /><a href={'/login'}>→りこさの人はこちら</a></div>
    </div>)
  }
}