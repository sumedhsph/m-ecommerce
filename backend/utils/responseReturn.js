const responseReturn = (res, code, data) => {
  return res.status(code).json(data);
};

export default responseReturn;
