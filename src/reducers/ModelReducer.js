const INITIAL_STATE = {
  modelEstado1: 'value model state 1',
  modelEstado2: 'value model state 2',
  inputValue: 'input initial value'
}

export default (state = INITIAL_STATE, action) => {
  if(action.type === 'MODIFY_MODEL_INPUT') {
    return { ...state, inputValue: action.payload }
  }
  return state;
}