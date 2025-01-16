function formatResponse(response) {
  return JSON.stringify(response, null, 2)
}

module.exports = {
  formatResponse,
}
