const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  //   res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    stack: err.stack,
  };

  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};
