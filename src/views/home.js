import React from 'react'
import logo from './logo.jpg'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
  render () {
    // フォームにテキストボックスを指定
    return (<div>
      <h1>早稲田大学理工サッカー部サークル</h1>
      <img src={logo} alt="Logo" />
      <form onSubmit={e => this.doSubmit(e)}>
        <input type='text'
          onChange={e => this.doChange(e)}
          value={this.state.value} />
        <input type='submit' />
      </form>
      <div><br /><a href={'/history'}>→サークル紹介ページ</a></div>
      <div><br /><a href={'/players'}>→選手紹介ページ</a></div>
      <div><br /><a href={'/manegers'}>→マネージャー紹介ページ</a></div>
    </div>)
  }
  // テキストボックスを変更したとき
  doChange (e) {
    this.setState({ value: e.target.value })
  }
  // フォームを送信したとき
  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}