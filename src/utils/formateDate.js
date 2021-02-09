const formateDate = (date) => {
  let t = date;
  let d = Object.values(t)[0];
  let dateformated = new Date(d * 1000).toUTCString();
  return dateformated;
};
export default formateDate;
