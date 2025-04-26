# Cryptic Riddle Challenge - Node.js and Express Mock API

## 📋 Overview
This project is designed to solve a "Cryptic Riddle" challenge where:
- An **encrypted text** and a **key** are fetched via an API (`/encrypt` endpoint).
- The text is **decrypted** using a simple Caesar Cipher technique.
- The **decrypted text** along with user details is **submitted** back to the server (`/verify` endpoint).

Since the original API was not provided, a **custom mock API** using **Express.js** has been created to simulate the endpoints and flow.

---

## 📂 Project Structure

cryptic-riddle-challenge/ │ ├── server/ │ ├── server.js # Express backend with mock API │ ├── encrypt.json # Static encrypted data (mocked response) │ ├── verify.json # Storage for submitted responses │ └── package.json # Server dependencies │ ├── client/ │ ├── app.js # Node.js client that solves the challenge │ └── package.json # Client dependencies │ └── README.md # This file



---

## 🛠️ Technologies Used
- Node.js
- Express.js
- Axios
- File System (for saving submitted data)
- CORS

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cryptic-riddle-challenge.git
cd cryptic-riddle-challenge


: This will start the server on http://localhost:5000.

You can manually test:

GET http://localhost:5000/encrypt

POST http://localhost:5000/verify

The client will:

Fetch the encrypted data.

Decrypt it using Caesar Cipher.

Submit the decrypted text and user details automatically to the /verify endpoint.

✅ On successful run, you will see confirmation messages on the terminal!

🧪 How to Verify
After running the client, open server/verify.json.

You will see the decrypted text and the submitted information saved there.

Server console will also log successful verification.

Example of saved data:

json
Copy
Edit
[
  {
    "decrypted_text": "Hello World",
    "email": "sakshamkanojia2002@gmail.com",
    "phone_number": "9310277188",
    "name": "Saksham Kanojia",
    "user_submitted_code": "function decryptText(encryptedText, key) {...}"
  }
]
📩 Contact
For any further queries or assistance, feel free to reach out:

Name: Saksham Kanojia

Email: sakshamkanojia2002@gmail.com

Phone: 9310277188

Thank you for reviewing my submission
