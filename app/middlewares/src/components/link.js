import React from 'react'
import logo from '../logo.jpg'
import Header from './Header';


export default class Link extends React.Component {

  render () {
    return (<div>
      <Header menu="SNS"/>
      <h1>SNS</h1>
      <div><br /><a href={'https://twitter.com/w_rikosoccer'}>Twitter</a></div>
      <div><br /><a href={'/https://www.instagram.com/wrs__2020/'}>Instgram</a></div>
      <div><br /><a href={'/https://spo-mane-football.com/category2'}>スポーツマネジメントさん</a></div>
      <div><br /><a href={'/http://be4do.com/'}>beyondさん</a></div>
    </div>)
  }
}