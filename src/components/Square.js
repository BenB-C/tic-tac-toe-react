import React from 'react';
import { connect } from 'react-redux';

function Square(props) {
  function handleClick(i) {
    const { dispatch } = props;
    const action = {
      type: 'ADD_MOVE',
      i: i
    };
    props.dispatch(action);
  }

  return (
    <button className="square" onClick={() => handleClick(props.index)}>
      {props.value}
    </button>
  );
}

export default connect()(Square);
