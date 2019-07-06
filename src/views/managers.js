import React, { Component } from 'react';
import Playerlist from './playerlist'
import Playerregister from './playerRegister'

//ここでthis.props.storeでなくほかのところでできないか？あるいはこれをルートに入れるコンポーネントにするために名前変更する？
class Players extends Component {
  render() {
    return (
      <div>
        <Playerlist store={this.props.store} />
        <Playerregister store={this.props.store} />
      </div>
    );
  }
}
export default Players