function masterDegreeHolder(users) {
  //Checks for falsy values
  if (!users) {
    return null;
  }

  /* 
  Extracting only keys of users to implement Array methods,taking accumulator as empty array 
  and initialValue as user of users.
  */
  const masterDegree = Object.keys(users).reduce(
    (accumulator, initialValue) => {
      // checks if user qualification is Master, if it push into accumultor
      if (users[initialValue].qualification === "Masters") {
        accumulator.push(initialValue);
      }
      return accumulator;
    },
    []
  );

  //Checks if masterDegree has  some elements
  if (masterDegree.length > 0) {
    return masterDegree;
  }
  return null; //returns null if nothing in masterDegree array
}
module.exports = masterDegreeHolder;
