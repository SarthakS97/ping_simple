const http = require('http');

setInterval(() => {
  const options = {
    method: 'GET',
    hostname: 'solforms.onrender.com/',
    port: 80,
    path: '/',
  };
  
  const req = http.request(options, (res) => {
    console.log(`Website visited! Status code: ${res.statusCode}`);
  });
  
  req.on('error', (e) => {
    console.error(`Error: ${e.message}`);
  });
  
  req.end();
}, 900000); // 15 minutes in milliseconds
