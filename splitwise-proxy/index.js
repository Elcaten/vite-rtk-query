require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Splitwise API configuration
const SPLITWISE_API_BASE = process.env.SPLITWISE_API_BASE

// Proxy middleware
app.use('/splitwise-proxy', async (req, res) => {
  try {
    const url = `${SPLITWISE_API_BASE}${req.path.replace('/splitwise-proxy', '')}`

    // Get the API key from the client's Authorization header
    const apiKey = req.headers.authorization?.replace('Bearer ', '')

    if (!apiKey) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'API key is required in the Authorization header',
      })
    }

    const response = await axios({
      method: req.method,
      url: url,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      params: req.query,
      data: req.body,
    })

    res.json(response.data)
  } catch (error) {
    console.error('Proxy error:', error.message)
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data,
    })
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`)
})
