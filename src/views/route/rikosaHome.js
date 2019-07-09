import React from 'react'
import logo from '../logo.jpg'

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
      <div><br /><a href={'/members'}>→メンバー紹介</a></div>
      <div><br /><a href={'/result'}>→対戦成績🔥</a></div>
      <div><br /><a href={'/schedule'}>→日程スケジュール</a></div>
      <div><br /><a href={'/photo'}>→フォト📷</a></div>
      <div><br /><a href={'/login'}>→りこさの人はこちら</a></div>
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