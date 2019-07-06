import React from 'react'
import logo from './logo.jpg'

export default class History extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    // フォームにテキストボックスを指定
    return (<div>
      <h1>サークル紹介</h1>
      <img src={logo} alt="Logo" />
      
    </div>)
  }
}

