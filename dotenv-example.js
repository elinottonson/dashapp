console.log('No value for FOO yet:', process.env.REACT_APP_AKID);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log('Now the value for FOO is:', process.env.REACT_APP_AKID);