//Function for finding all users staying in Germany.
function usersNationalityGermany(users) {
  if (!users) {
    return null;
  }
  //Initialising an empty array
  const germanyUser = [];
  //Iterating every user from users object
  for (let user in users) {
    //checks if germany as nationality of users
    if (users[user].nationality === "Germany") {
      germanyUser.push(user); //appends user if found nationality as germany
    }
  } //Checks if germany user has element and return array else null;
  if (germanyUser.length > 0) {
    return germanyUser;
  }
  return null;
}
module.exports = usersNationalityGermany;
