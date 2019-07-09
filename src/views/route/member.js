import React, { Component } from 'react';
import MemberList from '../../containers/memberList'

//ここでthis.props.storeでなくほかのところでできないか？あるいはこれをルートに入れるコンポーネントにするために名前変更する？
class Member extends Component {
  render() {
    return (
      <div>
        <MemberList store={this.props.store} />
      </div>
    );
  }
}
export default Member