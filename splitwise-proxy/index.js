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

// Allowed Splitwise API endpoints - adjust based on your needs
const ALLOWED_ENDPOINTS = [
  '/api/v3.0/get_current_user',
  '/api/v3.0/get_friends',
  '/api/v3.0/get_groups',
  '/api/v3.0/get_expenses',
  '/api/v3.0/get_expense',
  '/api/v3.0/create_expense',
  '/api/v3.0/update_expense',
  '/api/v3.0/delete_expense',
]

// Path validation middleware
const validatePath = (req, res, next) => {
  const requestedPath = req.path

  // Normalize the path
  let normalizedPath = requestedPath
    .split('/')
    .filter((segment) => segment && segment !== '.')
    .join('/')
  normalizedPath = `/${normalizedPath}`

  // Check if the path starts with /api/v3.0
  if (!normalizedPath.startsWith('/api/v3.0')) {
    return res.status(400).json({
      error: 'Invalid path',
      message: 'Path must start with api/v3.0',
    })
  }

  // Check if the path is in the allowed endpoints list
  if (
    !ALLOWED_ENDPOINTS.some((endpoint) => normalizedPath.startsWith(endpoint))
  ) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Access to this endpoint is not allowed',
    })
  }

  // Prevent path traversal
  if (normalizedPath.includes('..') || normalizedPath.includes('//')) {
    return res.status(400).json({
      error: 'Invalid path',
      message: 'Path traversal is not allowed',
    })
  }

  req.normalizedPath = normalizedPath
  next()
}

// Proxy middleware
app.use('/', proxyLimiter, validatePath, async (req, res) => {
  try {
    const url = `${SPLITWISE_API_BASE}${req.normalizedPath}`

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
