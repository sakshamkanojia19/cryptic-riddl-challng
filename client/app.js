const axios = require('axios');

const BASE_URL = 'http://localhost:5000'; 

async function fetchEncryptedData() {
  try {
    const response = await axios.get(`${BASE_URL}/encrypt`);
    return response.data;
  } catch (error) {
    console.error('Error fetching encrypted data:', error.message);
  }
}


function decryptText(encryptedText, key) {
  let decrypted = '';
  const shift = parseInt(key);

  for (let i = 0; i < encryptedText.length; i++) {
    const char = encryptedText[i];

    if (char.match(/[A-Z]/)) {
      decrypted += String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
    } else if (char.match(/[a-z]/)) {
      decrypted += String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
    } else {
      decrypted += char;
    }
  }

  return decrypted;
}

async function submitDecryptedText(decryptedText, userCode) {
  try {
    const response = await axios.post(`${BASE_URL}/verify`, {
      decrypted_text: decryptedText,
      email: "sakshamkanojia2002@gmail.com",
      phone_number: "9310277188",
      name: "Saksham Kanojia",
      user_submitted_code: userCode
    });

    console.log('Server Response:', response.data);
  } catch (error) {
    console.error('Error submitting decrypted text:', error.message);
  }
}

async function main() {
  const encryptedData = await fetchEncryptedData();

  if (!encryptedData) return;

  const { encrypted_text, key } = encryptedData;

  console.log('🔒 Encrypted Text:', encrypted_text);
  console.log('🔑 Key:', key);

  const decryptedText = decryptText(encrypted_text, key);
  console.log('Decrypted Text:', decryptedText);

  await submitDecryptedText(decryptedText, decryptText.toString());
}
main();
