import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function Calendar(props) {
  return (
    <DatePicker
      value={props.year}
      // onChange={e => props.changeYear(e)}
      onChange={(e) => {
        props.changeYear(e)
        props.changeDay(e)
     }}
      inline
    />
  );
};

class ResultForm extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
    this.changeYear = this.changeYear.bind(this)
    this.changeDay = this.changeDay.bind(this)
  }

  postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result){
    if(window.confirm('この内容で登録しますか？')){
      this.props.postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result);
      alert("登録しました");
    }else{
      alert("キャンセルしました");
    }
  }

  changeYear(year){
    var date = new Date(year)
    console.log(date.getFullYear());
    this.props.changeYear(date.getFullYear());
  }

  changeDay(day){
    var date = new Date(day)
    var month = date.getMonth()
    var day = date.getDate()
    this.props.changeDay(""+month+"/"+day);
  }

  changeCompetition(competition){
    this.props.changeCompetition(competition);
  }

  changeUs(us){
    this.props.changeUs(us);
  }

  changeYou(you){
    this.props.changeYou(you);
  }

  changeStage(stage){
    this.props.changeStage(stage);
  }

  changeOurscore(ourscore){
    this.props.changeOurscore(ourscore);
  }

  changeYourscore(yourscore){
    this.props.changeYourscore(yourscore);
  }

  changeComment(comment){
    this.props.changeComment(comment);
  }

  changeResult(result){
    this.props.changeResult(result);
  }

  

  render(){
    const {year,day,competition,us,you,stage,ourscore,yourscore,comment,result} = this.props
    var competitions = [
      {  name: "新歓合宿" },
      {  name: "スプリングカップ" },
      {  name: "稲穂カップ"},
      {  name: "学年合宿１年生"},
      {  name: "学年合宿２年生"},
      {  name: "夏の陣"}, 
      {  name: "マガジン杯"} ,
      {  name: "理工系リーグ"} ,
      {  name: "理工系カップ"} ,
      {  name: "新関東カップ"} ,
      {  name: "新関東リーグ"} ,
      {  name: "クリスマスカップ"} ,
      {  name: "学内戦"} ,
      {  name: "練習試合"} ,
      {  name: "その他"} ,
    ]
    var options = competitions.map(
      (n)=>(
        <option value={n.name}>
          {n.name}
        </option>
      )
    );

    var results = [
      { name: "勝ち"},
      { name: "負け"},
      { name: "引き分け"},
    ]
    var options2 = results.map(
      (n)=>(
        <option value={n.name}>
          {n.name}
        </option>
      )
    );
      
    return (
      <div>
        <RikosaHeader menu="試合結果登録"/>
        
        
        <form onSubmit={() => this.postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result)}>
          <ul>
            <Calendar
              changeYear={this.changeYear}
              changeDay={this.changeDay}
              year={year}
            />
          <li>
            年:
            <input value={year} onChange={e => this.changeYear(e.target.value)} />
          </li>
          <li>
            日付:
            <input value={day} onChange={e => this.changeDay(e.target.value)} />
          </li>
          
          <li>
            大会名:
            <select
              value={competition}
              onChange={e => this.changeCompetition(e.target.value)}>
              {options}
            </select>
          </li>
          <li>
            Myチーム名:
            <input value={us} onChange={e => this.changeUs(e.target.value)} />
          </li>
          <li>
            相手チーム名:
            <input value={you} onChange={e => this.changeYou(e.target.value)} />
          </li>
          <li>
            ステージ:
            <input value={stage} onChange={e => this.changeStage(e.target.value)} />
          </li>
          <li>
            得点:
            <input value={ourscore} onChange={e => this.changeOurscore(e.target.value)} />
          </li>
          <li>
            失点:
            <input value={yourscore} onChange={e => this.changeYourscore(e.target.value)} />
          </li>
          <li>
            コメント:
            <textarea value={comment} onChange={e => this.changeComment(e.target.value)} />
          </li>
          <li>
            会場:
            <input value={result} onChange={e => this.changeResult(e.target.value)} />
            {/* <select
              value={result}
              onChange={e => this.changeResult(e.target.value)}>
              {options2}
            </select> */}
          </li>
        </ul>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default ResultForm
