//Function for finding all users staying in Germany.
function usersNationalityGermany(users) {
  if (!users) {
    return null;
  }

  /* Extracting only keys of users to implement Array methods,taking accumulator as empty array 
     and initialValue as user of users
  */
  const germanyUser = Object.keys(users).reduce((accumulator, initialValue) => {
    // checks for nationality as germany
    if (users[initialValue].nationality === "Germany") {
      accumulator.push(initialValue);
    }
    return accumulator;
  }, []);

  //Checks if germany user has element and return array else null;
  if (germanyUser.length > 0) {
    return germanyUser;
  }
  return null;
}
module.exports = usersNationalityGermany;
