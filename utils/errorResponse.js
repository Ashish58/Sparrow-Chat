class errorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCose = statusCode;
  }
}

module.exports = errorResponse;
