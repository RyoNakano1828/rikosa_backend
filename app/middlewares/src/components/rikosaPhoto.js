import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import RikosaHeader from './rikosaHeader';


export default class RikosaPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      images: []
    };
    this.handleOnDrop = this.handleOnDrop.bind(this);
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
                isUploading: false,
                images: this.state.images.concat(images)
              });
          }
      }).catch(e => console.log(e));
  }

  handleOnDrop(files) {
    this.setState({isUploading: true});

    Promise.all(files.map(file => this.uploadImage(file)))
      .then(images => {
          console.log(images);
        this.setState({
          isUploading: false,
          images: this.state.images.concat(images)
        });
        console.log(this.state.images);
      }).catch(e => console.log(e));
  }

  uploadImage(file) {
    return axios.get('/upload', {
      params: {
        filename: file.name,
        filetype: file.type
      }
    }).then(res => {
      const options = {
        headers: {
          'Content-Type': file.type
        }
      };
      return axios.put(res.data.url, file, options);
    }).then(res => {
      const {name} = res.config.data;
      console.log(file.name);
      return {
        name,
        isUploading: true,
        url: `https://rikosa2.s3.amazonaws.com/${file.name}`
      };
    });
  }

  render() {
    const divStyle = {
      width: 400,
      height: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#666',
      borderStyle: 'solid',
      borderRadius: 5,
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
    };

    const activeStyle = {
      opacity: 0.5,
      backgroundColor: '#eee'
    };

    const rejectStyle = {
      backgroundColor: '#ffdddd'
    };

    return (
      <div>
        <RikosaHeader menu="ログアウト" onClick={this.props.logout}/>

        <div style={{width: '100%'}}>
          <h1 className='photo_title'>フォトギャラリーに写真を追加してね♪</h1>
          <Dropzone
            onDrop={this.handleOnDrop}
            accept="image/*"
            className='photo_add'
            activeStyle={activeStyle}
            rejectStyle={rejectStyle}
            >
          {this.state.isUploading ?
            <div>ファイルをアップロードしています</div> :
            <div>ここに画像をドラックまたはクリック</div>}
          </Dropzone>
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


