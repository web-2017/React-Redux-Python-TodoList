import { CREATE_MESSAGES } from './types'

// CREATE MESSAGES
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGES,
    payload: msg,
  }
}
