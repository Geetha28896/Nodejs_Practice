const axios = require('axios').default;


 axios .get('http://localhost:8000')
  axios.then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  axios.catch(error => {
    console.error(error);
  });