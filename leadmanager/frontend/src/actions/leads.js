import axios from 'axios'
import { createMessage } from './messages'
import { GET_LEADS, DELETE_LEADS, ADD_LEADS, GET_ERRORS } from './types'

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
      dispatch(createMessage({ deleteLead: 'Lead deleted' }))
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
      dispatch(createMessage({ addLead: 'Lead added' }))
      dispatch({
        type: ADD_LEADS,
        payload: res.data,
      })
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      })
    })
}
