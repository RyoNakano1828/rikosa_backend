import React, { Component } from 'react';
import Playerlist from './players'
import Playerregister from './playerRegister'

//ここでthis.props.storeでなくほかのところでできないか？あるいはこれをルートに入れるコンポーネントにするために名前変更する？
class App extends Component {
  render() {
    return (
      <div>
        <Playerlist store={this.props.store} />
        <Playerregister store={this.props.store} />
      </div>
    );
  }
}

export default App