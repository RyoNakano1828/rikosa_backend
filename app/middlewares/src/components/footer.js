import React, { Component } from 'react';
import '../App.scss';

class Footer extends Component {

    render(){
        return (
        <div className='footer_flame' >
            <div>
                <p className='footer_copy' >早稲田大学理工サッカー部オフィシャルサイトが提供する情報、画像、音声等を、権利者の許可なく複製、転用、販売などの二次利用することを固く禁じます。</p>
                <p className='footer_copy' >Copyright © Waseda university Science＆Engineering Soccer club All Rights Reserved.</p>
            </div>
        </div>
        );
    }
}


export default Footer;
