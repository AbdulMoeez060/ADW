const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/formData', (req, res) => {
  const { name, email } = req.body;
  // Do whatever you want with the received data
  console.log(`Received form data - Name: ${name}, Email: ${email}`);

  // Send a response
  res.json({ message: 'Form data received successfully!' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
