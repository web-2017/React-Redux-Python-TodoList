import axios from 'axios'
import { GET_LEADS, DELETE_LEADS, ADD_LEADS } from './types'

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get('/api/leads/')
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      })
    })
    .catch((error) => console.log(error))
}

// DELETE LEAD
export const deleteLeads = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_LEADS,
        payload: id,
      })
    })
    .catch((error) => console.log(error))
}
// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post('/api/leads/', lead)
    .then(() => {
      dispatch({
        type: ADD_LEADS,
        payload: res.data,
      })
    })
    .catch((error) => console.log(error))
}
