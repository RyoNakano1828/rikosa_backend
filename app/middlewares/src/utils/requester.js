import axios from 'axios';
import cookies from './cookies';
import { requestOptions } from '../constants/request';

const getOptions = (selectedOptions = null) => {
  const options = selectedOptions || requestOptions;
  const username = cookies.getUsername() || '';
  options.headers['PIM-Authorization'] = `Bearer ${username}`;
  return options;
}
const requester = {
  get: (url, options = null) => {
    return axios.get(url, getOptions(options));
  },
  post: (url, parameters, options = null) => {
    return axios.post(url, parameters, getOptions(options));
  },
  put: (url, parameters, options = null) => {
    return axios.put(url, parameters, getOptions(options));
  },
  delete: (url, options = null) => {
    return axios.delete(url, getOptions(options));
  },
};

export default requester;
