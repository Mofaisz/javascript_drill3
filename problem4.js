function userBasedOnProgrammingLanguage(users) {
  const userAndProgrammingLanguage = {
    Golang: [],
    Javascript: [],
    Python: [],
  };

  //check for falsy values
  if (!users) {
    return null;
  }

  for (let user in users) {
    //splitted every word
    userLanguages = users[user]["desgination"].split(" ");
    //check if Golang is present in userLanguages
    if (userLanguages.includes("Golang")) {
      userAndProgrammingLanguage["Golang"].push(user);
    } //check if Javascript is present in userLanguages
    if (userLanguages.includes("Javascript")) {
      userAndProgrammingLanguage["Javascript"].push(user); //It will push user if its present
    } //checking if Python is present in userLanguages
    if (userLanguages.includes("Python")) {
      userAndProgrammingLanguage["Python"].push(user); //It will push user if its present
    }
  }
  //If objects contains some keys and values it will return result else null.
  if (Object.keys(userAndProgrammingLanguage).length > 0) {
    return userAndProgrammingLanguage;
  }
  return null;
}
module.exports = userBasedOnProgrammingLanguage; //Exporting modules for further use.
