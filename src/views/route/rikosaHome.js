import React from 'react'
import logo from '../logo.jpg'

export default class Home extends React.Component {
  render () {
    //ログイン後遷移する
    return (<div>
      <h1>りこさ用登録ページ</h1>
      <img src={logo} alt="Logo" />
      <div><br /><a href={'/playerform'}>→プレーヤー新規登録</a></div>
      <div><br /><a href={'/managerform'}>マネージャー新規登録</a></div>
      <div><br /><a href={'/rikosamembers'}>→メンバー編集</a></div>
      <div><br /><a href={'/resultform'}>→対戦成績登録🔥</a></div>
      <div><br /><a href={'/photoadd'}>→写真追加</a></div>
    </div>)
  }
}