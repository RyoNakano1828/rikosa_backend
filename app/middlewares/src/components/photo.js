import React from 'react'
import Header from './Header';
import axios from 'axios';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentWillMount(){
      return axios.get('/getimage',{

      }).then(keylist => {
          console.log(keylist.data.keyList[2]);
          for(let v of Object.keys(keylist.data.keyList)) {
            var images = {};
            console.log(keylist.data.keyList[v]);
            images.name = keylist.data.keyList[v];
            images.isUploading = true;
            images.url = `https://rikosa2.s3.amazonaws.com/${keylist.data.keyList[v]}`
            console.log(images);
            this.setState({
                images: this.state.images.concat(images)
              });
          }
      }).catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Header menu="SNS"/>
        <div style={{width: '100%'}}>
          <h1 className='photo_title'>りこさフォトギャラリー</h1>
          {this.state.images.length > 0 &&
            <div className='photo_zone'>
              {this.state.images.map(({name, url}) =>
                <img key={name} src={url} className='photo_size'/>)}
            </div>}
        </div>
      </div>
    );
  }
}

     