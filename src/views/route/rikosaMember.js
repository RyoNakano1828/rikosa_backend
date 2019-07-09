import React, { Component } from 'react';
import RikosaMemberList from '../../containers/rikosaMemberList'
import PlayerRegister from '../../containers/playerRegister'

//ここでthis.props.storeでなくほかのところでできないか？あるいはこれをルートに入れるコンポーネントにするために名前変更する？
class RikosaMember extends Component {
  render() {
    return (
      <div>
        <RikosaMemberList store={this.props.store} />
        <PlayerRegister store={this.props.store} />
      </div>
    );
  }
}
export default RikosaMember