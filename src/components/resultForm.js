import React, {Component} from 'react'
import RikosaHeader from './rikosaHeader';

class ResultForm extends Component {

  postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result){
    if(window.confirm('この内容で登録しますか？')){
      this.props.postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result);
      alert("登録しました");
    }else{
      alert("キャンセルしました");
    }
  }

  changeYear(year){
    this.props.changeYear(year);
  }

  changeDay(day){
    this.props.changeDay(day);
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
    return (
      <div>
        <RikosaHeader menu="試合結果登録"/>
        <form onSubmit={() => this.postResult(year,day,competition,us,you,stage,ourscore,yourscore,comment,result)}>
          <ul>
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
            <input value={competition} onChange={e => this.changeCompetition(e.target.value)} />
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
            <input value={comment} onChange={e => this.changeComment(e.target.value)} />
          </li>
          <li>
            勝・負け・引き分け:
            <input value={result} onChange={e => this.changeResult(e.target.value)} />
          </li>
        </ul>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default ResultForm
