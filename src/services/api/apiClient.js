// src/services/api/apiClient.js
// Centralized API wrapper with normalized error handling

import { ERROR_TYPES, HTTP_STATUS_CODES } from '../../constants/errorTypes'
import { ERROR_MESSAGES } from '../../config/errorMessages'

/**
 * Normalizes error responses into a consistent shape
 * @param {Error | Response | Object} error
 * @returns {Object} Normalized error object
 */
function normalizeError(error) {
  const isDev = import.meta.env.DEV

  // Log full error details ONLY in development
  if (isDev) {
    console.error('[API Error - Dev Only]', error)
  }

  // Network error (no connection)
  if (!navigator.onLine || error instanceof TypeError && error.message === 'Failed to fetch') {
    return {
      type: ERROR_TYPES.NETWORK,
      message: ERROR_MESSAGES.NETWORK_ERROR.message,
      statusCode: 0,
      isDev,
    }
  }

  // HTTP Response error
  if (error instanceof Response || (error && error.status)) {
    const status = error.status || 500
    let type = ERROR_TYPES.SERVER

    if (status === 404) type = ERROR_TYPES.NOT_FOUND
    else if (status === 400) type = ERROR_TYPES.VALIDATION
    else if (status === 401 || status === 403) type = ERROR_TYPES.AUTH

    return {
      type,
      message: ERROR_MESSAGES.API_ERROR.message,
      statusCode: status,
      isDev,
    }
  }

  // Timeout or other fetch error
  if (error && error.message) {
    return {
      type: ERROR_TYPES.NETWORK,
      message: ERROR_MESSAGES.NETWORK_ERROR.message,
      isDev,
    }
  }

  // Unknown error
  return {
    type: ERROR_TYPES.UNKNOWN,
    message: ERROR_MESSAGES.UNKNOWN_ERROR.message,
    isDev,
  }
}

/**
 * Main API fetch wrapper with error handling
 * @param {string} url
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} Response data or normalized error
 */
export async function apiFetch(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    // Handle non-2xx status codes
    if (!response.ok) {
      const error = new Response(response.body, { status: response.status })
      throw error
    }

    return {
      success: true,
      data: await response.json(),
    }
  } catch (err) {
    const normalizedError = normalizeError(err)
    return {
      success: false,
      error: normalizedError,
    }
  }
}

/**
 * Simplified GET request
 */
export function get(url, options = {}) {
  return apiFetch(url, { ...options, method: 'GET' })
}

/**
 * Simplified POST request
 */
export function post(url, data, options = {}) {
  return apiFetch(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * Simplified PUT request
 */
export function put(url, data, options = {}) {
  return apiFetch(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

/**
 * Simplified DELETE request
 */
export function deleteRequest(url, options = {}) {
  return apiFetch(url, { ...options, method: 'DELETE' })
}
