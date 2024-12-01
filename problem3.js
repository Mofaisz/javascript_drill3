function masterDegreeHolder(users) {
  //Checks for falsy values 
  if (!users) {
    return null;
  }
  //Initialising an empty array
  masterDegree = [];
  //Iterating every user from users object
  for (let user in users) {
    //Checks if Masters as qualification of users
    if (users[user].qualification === "Masters") {
      masterDegree.push(user); //Appends user if Masters as qualification
    }
  }//Checks if masterDegree has  some elements
  if (masterDegree.length > 0) {
    return masterDegree;
  }
  return null;  //returns null if nothing in masterDegree array
}
module.exports = masterDegreeHolder;  
