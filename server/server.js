const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const encryptData = require('./encrypt.json');


app.get('/encrypt', (req, res) => {
  res.json(encryptData);
});

app.post('/verify', (req, res) => {
  const { decrypted_text, email, phone_number, name, user_submitted_code } = req.body;

  if (!decrypted_text || !email || !phone_number || !name || !user_submitted_code) {
    return res.status(400).json({ message: "Please fill all required fields!" });
  }

  const submission = { decrypted_text, email, phone_number, name, user_submitted_code };

  const data = fs.existsSync('verify.json') ? JSON.parse(fs.readFileSync('verify.json')) : [];
  data.push(submission);
  fs.writeFileSync('verify.json', JSON.stringify(data, null, 2));

  res.json({ message: "Verification Successful! Your data has been saved." });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
