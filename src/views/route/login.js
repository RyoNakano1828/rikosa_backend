import React, { Component } from 'react';
import Login2 from '../../containers/login'

//ここでthis.props.storeでなくほかのところでできないか？あるいはこれをルートに入れるコンポーネントにするために名前変更する？
class Login extends Component {
  render() {
    return (
      <div>
        <Login2 store={this.props.store} />
      </div>
    );
  }
}
export default Login