/* const getSecondsOfThisYearUntilNow = () => {
  const today = new Date();
  const yearNow = today.getFullYear();
  const thisYearNewYear = new Date(yearNow, 0, 1);
  return (Date.now() - thisYearNewYear.getTime()) / 1000;
};*/

const getSecondsOfThisYearUntilNow = () => {
  const today = new Date();
  const thisYearNewYear = new Date(today.getFullYear(), 0, 1);
  return (Date.now() - thisYearNewYear.getTime()) / 1000;
};

export default getSecondsOfThisYearUntilNow;
