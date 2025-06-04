// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors'); // Import cors

app.use(cors()); // Use cors middleware
app.use(express.json());

const KLARNA_USERNAME = '8de15010-04cf-4654-8949-eb167bd38fd0';
const KLARNA_PASSWORD = 'klarna_test_api_WWVGNHZCP015JWUpL0QzVnZITkhNdUJBbDEjNShWQ3ksOGRlMTUwMTAtMDRjZi00NjU0LTg5NDktZWIxNjdiZDM4ZmQwLDEsQXlhOVlKaW9oRDUySkJCcUkwcVhnNzZHMFFtalNiTDVqajlJbk16Rm16ST0';

const KLARNA_API_URL = 'https://api.playground.klarna.com';

app.post('/api/klarna/session', async (req, res) => {
  try {
    const { order_amount = 10000, course_name = 'Cool Product' } = req.body;

    const response = await axios.post(
      `${KLARNA_API_URL}/payments/v1/sessions`,
      {
        purchase_country: 'GB',
        purchase_currency: 'GBP',
        locale: 'en-GB',
        order_amount,
        order_tax_amount: Math.round(order_amount * 0.1), // assuming 10% tax
        order_lines: [
          {
            type: 'physical',
            reference: '123456789',
            name: course_name,
            quantity: 1,
            unit_price: order_amount,
            tax_rate: 1000,
            total_amount: order_amount,
            total_tax_amount: Math.round(order_amount * 0.1),
          },
        ],
      },
      {
        auth: {
          username: KLARNA_USERNAME,
          password: KLARNA_PASSWORD,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({
      client_token: response.data.client_token,
    });
  } catch (error) {
    console.error('Error creating Klarna session:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to create Klarna session' });
  }
});


app.listen(3001, () => {
  console.log('Server running on port 3001');
});
