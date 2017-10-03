export const modifyModelInput = (value) => {
  return {
    type: 'MODIFY_MODEL_INPUT',
    payload: value
  }
}


// MODELO REDUX THUNK

// export const ModelReduxThunk = () => {
// 	return (dispath) => {
// 		firebase.database().ref('/persons').on('value', snapshot => {
//       dispath ({
//         type: 'LIST_PERSONS',
//         payload: snapshot.val() )
//       })
//     })
// 	}
// }