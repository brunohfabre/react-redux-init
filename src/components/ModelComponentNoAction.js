import React from 'react';
import { connect } from 'react-redux';

const ModelComponentNoAction = props => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>{props.modelEstado1}</li>
        <li>{props.modelEstado2}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => (
  {
    modelEstado1: state.ModelReducer.modelEstado1,
    modelEstado2: state.ModelReducer.modelEstado2,
  }
)

export default connect(mapStateToProps, null)(ModelComponentNoAction);