import React from 'react';
import { connect } from 'react-redux';

import { modifyModelInput } from '../actions/ModelAction';

const ModelComponentWithAction = props => {
  return (
    <div>
      <input type="text" value={props.inputValue} onChange={text => props.modifyModelInput(text.target.value)}/> <br/>
      <b>{props.inputValue}</b>
    </div>
  )
}

const mapStateToProps = state => (
  {
    inputValue: state.ModelReducer.inputValue
  }
)

export default connect(mapStateToProps, { modifyModelInput })(ModelComponentWithAction);