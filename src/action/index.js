import { RECV_DATA, REQ_DATA, REQ_ERROR } from './actionType'
import URL from './url'
import axios from 'axios'


export function fetch() {
 return dispatch => {

    axios.get(URL+'/notes')
    .then(responce => dispatch({type: RECV_DATA,payload: responce.data}),
    err => dispatch({type: REQ_ERROR,payload:err})
  )

  }

}
