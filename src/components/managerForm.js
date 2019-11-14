import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class ManagerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      images: [],
      imagename: ""
    };
    this.handleOnDrop = this.handleOnDrop.bind(this);
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
        url: `https://rikosa2.s3.amazonaws.com/${this.state.imagename}`
      };
    });
  }

  
  postManager(name,uniform,univ,hobby,comment,generation){
    if(window.confirm('この内容で登録しますか？')){
      this.props.postManager(name,uniform,univ,hobby,comment,generation);
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
  changeUniform(uniform){
    this.props.changeUniform(uniform);
  }
  changeUniv(univ){
    this.props.changeUniv(univ);
  }
  changeHobby(hobby){
    this.props.changeHobby(hobby);
  }
  changeComment(comment){
    this.props.changeComment(comment);
  }
  changeGeneration(generation){
    this.props.changeGeneration(generation);
  }

  render(){
    const {name,uniform,univ,hobby,comment,generation} = this.props
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
        <RikosaHeader menu="マネージャー登録"/>
        <div style={{width: '90%', margin: '30px auto'}}>
        <form onSubmit={() => this.postManager(name,uniform,univ,hobby,comment,generation)}>
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
            大学:
            <input value={univ} onChange={e => this.changeUniv(e.target.value)} />
          </li>
          <li>
            趣味・特技:
            <input value={hobby} onChange={e => this.changeHobby(e.target.value)} />
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
        </div>
        <div style={{width: '90%', margin: '30px auto'}}>
          <h1>※名前を入力してから画像を入れてください</h1>
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

export default ManagerForm