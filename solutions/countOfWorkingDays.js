const countOfWorkingDays = (earlierDate, laterDate) => {
  //const actDay = laterDate.getDay(); //hét hányadik napja
  const howManyDays = Math.floor(
    (laterDate.getTime() - earlierDate.getTime()) / 1000 / 60 / 60 / 24
  );

  const howManyWeeks = Math.floor(howManyDays / 7);
  const remaining = howManyDays % 7;
  const main = howManyWeeks * 5 + remaining;
  if (howManyDays < 0) {
    throw new Error("The first parameter is earlier date, than second!");
  }
  if (laterDate.getMonth() === 0 && laterDate.getDate() === 1) {
    return 1;
  } else {
    return main;
  }
};

export default countOfWorkingDays;
