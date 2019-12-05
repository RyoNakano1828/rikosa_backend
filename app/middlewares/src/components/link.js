import React from 'react'
import logo from '../logo.jpg'
import Header from './Header';


export default class Link extends React.Component {

  render () {
    return (<div>
      <Header menu="SNS"/>
      <h1>SNS</h1>
      <div><br /><a href={'https://twitter.com/w_rikosoccer'}>Twitter</a></div>
      <div><br /><a href={'/result'}>Instgram</a></div>
      <div><br /><a href={'/schedule'}>スポーツマネジメントさん</a></div>
      <div><br /><a href={'/photo'}>beyondさん</a></div>
    </div>)
  }
}