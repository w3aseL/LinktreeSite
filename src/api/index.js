import { API_HOST } from "./config"
import axios from 'axios'

/* API Calling
 * ----------
 * There will be a main request function. Use it.
 * 
 * Each endpoint will have a function on here for us to call in containers and components. Less code to worry about
 * for each container. The requests should provide all the data needed in a JSON format. If it doesn't, we will change
 * that.
 */
export const request = async (endpoint, body, type, contentType="application/json", header={}) => {
  var headers = {
    'Content-Type': contentType,
    ...header
  }
  
  return axios({
    method: type,
    url: API_HOST + endpoint,
    headers: headers,
    data: body
  })
}