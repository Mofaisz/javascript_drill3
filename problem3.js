function masterDegreeHolder(users) {
  //Initialising an empty array
  masterDegree = [];
  //Iterating every user from users object
  for (let user in users) {
    //Checks if Masters as qualification of users
    if (users[user].qualification === "Masters") {
      masterDegree.push(user); //Appends user if Masters as qualification
    }
  }
  return masterDegree;
}
module.exports = masterDegreeHolder;
