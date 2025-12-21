// src/utils/errorHandler.js
// Utility function to create user-safe error messages from thrown errors

import { ERROR_TYPES } from '../constants/errorTypes'
import { ERROR_MESSAGES } from '../config/errorMessages'

/**
 * Creates a user-safe error message from any thrown error
 * @param {Error | string | Object} error
 * @param {string} fallbackType - Default error type if cannot be determined
 * @returns {Object} Safe error object with title, message, and type
 */
export function createSafeError(error, fallbackType = ERROR_TYPES.UNKNOWN) {
  const isDev = import.meta.env.DEV

  // Log original error only in dev
  if (isDev && error) {
    console.error('[Error Handler]', error)
  }

  let errorType = fallbackType
  let message = ERROR_MESSAGES.UNKNOWN_ERROR.message

  if (typeof error === 'string') {
    // String error
    message = error
  } else if (error && error.type) {
    // Already a normalized error object
    errorType = error.type
    message = error.message || ERROR_MESSAGES.UNKNOWN_ERROR.message
  } else if (error && error.message) {
    // Standard JS error
    if (error.message.includes('network') || error.message.includes('fetch')) {
      errorType = ERROR_TYPES.NETWORK
      message = ERROR_MESSAGES.NETWORK_ERROR.message
    } else {
      message = ERROR_MESSAGES.UNKNOWN_ERROR.message
    }
  }

  return {
    type: errorType,
    message,
    title: ERROR_MESSAGES[Object.keys(ERROR_MESSAGES).find(
      (key) => ERROR_MESSAGES[key].message === message,
    )]?.title || ERROR_MESSAGES.UNKNOWN_ERROR.title,
  }
}

/**
 * Logs error details safely
 * @param {Error | Object} error
 * @param {string} context - Where error occurred
 */
export function logError(error, context = 'Unknown Context') {
  if (import.meta.env.DEV) {
    console.error(`[${context}]`, error)
  }
}
