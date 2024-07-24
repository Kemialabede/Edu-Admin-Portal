const getTotalPages = (totalItems, limit) => {
  return Math.ceil(Number(totalItems / limit));
};

export default getTotalPages;
