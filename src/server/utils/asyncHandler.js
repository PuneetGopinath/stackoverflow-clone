/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/utils/asyncHandler.js
 * License: MIT (see LICENSE)
*/

const asyncHandler = (fn) => ((req, res, next) => Promise.resolve(fn(req, res, next)).catch(next));

module.exports = asyncHandler;