import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setName, setOffline, setOnline } from '../../index'

class Page extends PureComponent {
  render() {
    return (
      <div>{this.props.name.name}: {this.props.name.status}</div>
      <button onClick={() => this.props.setOnline()}>online</button>
      <button onClick={() => this.props.setOffline()}>offline</button>
      <button onClick={() => this.props.setName(input.value)}>ChangeName</button>
      <input value=...></input>
    );
  }
}

mapStateToProps = (state) => {
  name: state.name
}

mapDispatchToProps = {
  setName: (name) => setName(name);
  setOnliner: () => setOnline();
  setOffline: () => setOffline();
}


const state = {
  name: 'Sashenka',
  surname: 'Kovaleva',
}


export default connect(mapStateToProps, mapDispatchToProps)(Page)
