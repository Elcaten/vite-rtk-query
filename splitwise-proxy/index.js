require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = process.env.PORT || 3001

// Rate limiting configuration
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
})

const proxyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 50 requests per windowMs
  message: 'Too many proxy requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
})

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400, // 24 hours
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(generalLimiter) // Apply general rate limiting to all routes

// Splitwise API configuration
const SPLITWISE_API_BASE = process.env.SPLITWISE_API_BASE

// Proxy middleware
app.use('/splitwise-proxy', proxyLimiter, async (req, res) => {
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
