require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');



// controllers
const submitForm = require('./controllers/submitForm');

app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();  // !! For production, you should replace it with the actual domain of your React application to adhere to security best practices
})


app.get('/', (req, res) => {
  res.send('Hello This Nutag Foundation Backend');
}); 

app.use("/submit-form", submitForm);


// app.use(bodyParser.json());
// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us6'
// });

// app.post('/subscribe', async (req, res) => {
//   const { email, name } = req.body;

//   try {
//     const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
//       email_address: email,
//       status: 'subscribed',
//       merge_fields: {
//         FNAME: name,
//       },
//     });

//     res.status(200).json({ status: 'success', data: response });
//   } catch (error) {
//     res.status(500).json({ status: 'error', message: error.message });
//   }
// });





module.exports = app;