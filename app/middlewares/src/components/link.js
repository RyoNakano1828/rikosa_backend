import React from 'react'
import logo from '../images/logo.jpg'
import Header from './Header';


export default class Link extends React.Component {

  render () {
    return (<div>
      <Header menu="SNS"/>
      <h1>SNS</h1>
      <div className='buttons'>
        <a href={'http://be4do.com/'} className='button buttonx'>beyondさん</a>
        <a href={'https://twitter.com/w_rikosoccer'} className='button buttonx'>Twitter</a>
        <a href={'https://spo-mane-football.com/category2'} className='button buttonx'>スポーツマネジメントさん</a>
        <a href={'https://www.instagram.com/wrs__2020/'} id='murasaki'className='button loginButton'>Instgram</a>   
      </div>
    </div>)
  }
}