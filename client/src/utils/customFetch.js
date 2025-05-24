import axios from 'axios';
const customFetch = axios.create({
  baseURL: 'http://localhost:5100/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export default customFetch;

// import axios from 'axios';

// const customFetch = axios.create({
//   baseURL: '/api/v1',
// });

// export default customFetch;
