import React, {Component} from 'react'

class MemberList extends Component{

  constructor(props){
    super(props);
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e){
    e.preventDefault();
    this.props.fetchMember();
  }

  render(){
    const { isFetching, playerArray } = this.props
    console.log(this.props)
    return(
      <div>
        {
          isFetching
            ? <h2>Now Loading...</h2>
            : <div>
                <button type='submit' onClick={this.handleFetchData}>fetch data</button>
                <ul>
                  {playerArray.map(player => (
                    <li key={player._id}>  
                      {`${player.name} (${player.position})`}
                      {/*<button onClick={() => handleUpdateCharacter(character._id)}>+1</button>
                      <button tpye='submit' onClick={this.handleSubmit}>delete</button>*/}
                    </li>
                  ))}
                </ul>
              </div>
        }
      </div>
    )
  }
}


export default MemberList
