require('dotenv').config();
const express = require('express');
const app = express();
const route = require('./src/routes/route.js')
app.use('/',route);
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');

//   const responseData = {
//     name: 'Kanhaiya lal',
//     mobileNo:'8887769694',
//     employeeId:89,
//     designation : 'software engineering',
//     houseNo: '2617',
//     pincode:'660062',
//     fullAddress: 'sector 65 mohali punjab'

//   };

//   const jsonString = JSON.stringify(responseData);

//   res.end(jsonString);
// });

const PORT = 3000;
// const port = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
