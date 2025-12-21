// src/constants/errorTypes.js
// Error type constants for consistent error handling

export const ERROR_TYPES = {
  NETWORK: 'network',
  SERVER: 'server',
  VALIDATION: 'validation',
  AUTH: 'auth',
  NOT_FOUND: 'notFound',
  UNKNOWN: 'unknown',
}

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
}
