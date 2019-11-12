import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class PlayerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      images: [],
      imagename: ""
    };
    this.handleOnDrop = this.handleOnDrop.bind(this);
  }

  componentWillMount(){
    return axios.get('/getimage',{

    }).then(keylist => {
        for(let v of Object.keys(keylist.data.keyList)) {
          var images = {};
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
        filename: this.state.imagename,
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
      const {name} = this.state.imagename;
      return {
        name,
        isUploading: true,
        url: `https://rikosa2.s3.amazonaws.com/${file.name}`
      };
    });
  }

  postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation){
    if(window.confirm('この内容で登録しますか？')){
      this.props.postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation);
      alert("登録しました");
    }else{
      alert("キャンセルしました");
    }
  }

  changeName(name){
    this.props.changeName(name);
    this.setState({
      imagename: name,
    });
  }

  changePosition(position){
    this.props.changePosition(position);
  }

  changeUniform(uniform){
    this.props.changeUniform(uniform);
  }

  changeFrom(from){
    this.props.changeFrom(from);
  }

  changeBelong(belong){
    this.props.changeBelong(belong);
  }

  changeHobby(hobby){
    this.props.changeHobby(hobby);
  }

  changeHeight(height){
    this.props.changeHeight(height);
  }

  changeComment(comment){
    this.props.changeComment(comment);
  }

  changeGeneration(generation){
    this.props.changeGeneration(generation);
  }

  render(){
    const {name,position,uniform,from,belong,hobby,height,comment,generation} = this.props
    const divStyle = {
      width: 400,
      height: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#666',
      borderStyle: 'solid',
      borderRadius: 5
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
        <RikosaHeader menu="プレーヤー登録"/>
        <form onSubmit={() => this.postPlayer(name,position,uniform,from,belong,hobby,height,comment,generation)}>
          <ul>
          <li>
            名前:
            <input value={name} onChange={e => this.changeName(e.target.value)} />
          </li>
          <li>
            背番号:
            <input value={uniform} onChange={e => this.changeUniform(e.target.value)} />
          </li>
          <li>
            ポジション:
            <input value={position} onChange={e => this.changePosition(e.target.value)} />
          </li>
          <li>
            出身:
            <input value={from} onChange={e => this.changeFrom(e.target.value)} />
          </li>
          <li>
            学部学科:
            <input value={belong} onChange={e => this.changeBelong(e.target.value)} />
          </li>
          <li>
            趣味・特技:
            <input value={hobby} onChange={e => this.changeHobby(e.target.value)} />
          </li>
          <li>
            身長:
            <input value={height} onChange={e => this.changeHeight(e.target.value)} />
          </li>
          <li>
            コメント:
            <input value={comment} onChange={e => this.changeComment(e.target.value)} />
          </li>
          <li>
            何期？:
            <input value={generation} onChange={e => this.changeGeneration(e.target.value)} />
          </li>
        </ul>
          <button type="submit">submit</button>
        </form>
        <div style={{width: 760, margin: '30px auto'}}>
          <h1>React S3 Image Uploader Sample</h1>
          <Dropzone
            onDrop={this.handleOnDrop}
            accept="image/*"
            style={divStyle}
            activeStyle={activeStyle}
            rejectStyle={rejectStyle}
            >
          {this.state.isUploading ?
            <div>ファイルをアップロードしています</div> :
            <div>ここに画像をドラックまたはクリック</div>}
          </Dropzone>
          {this.state.images.length > 0 &&
            <div style={{margin: 30}}>
              {this.state.images.map(({name, url}) =>
                <img key={name} src={url} style={{width: 200, height: 200}}/>)}
            </div>}
        </div>
      </div>
    )
  }
}

export default PlayerForm