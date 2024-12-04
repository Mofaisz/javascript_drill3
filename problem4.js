function userBasedOnProgrammingLanguage(users) {
  //check for falsy values
  if (!users) {
    return null;
  }

  const userAndProgrammingLanguage = Object.keys(users).reduce(
    (accumulator, initialValue) => {
      // splitted every word
      const programmingLang = users[initialValue].desgination.split(" ");

      // checks if Golang is present in userLanguages
      if (programmingLang.includes("Golang")) {
        accumulator["Golang"].push(initialValue);
      }
      // // checks if Javascript is present in userLanguages
      if (programmingLang.includes("Javascript")) {
        accumulator["Javascript"].push(initialValue);
      }
      // //checs if python is present in userLanguages
      if (programmingLang.includes("Python")) {
        accumulator["Python"].push(initialValue);   
      }
      return accumulator;
    },
    // accumulator is object here and Golang, Javascript, python is keys
    { 
      Golang: [],
      Javascript: [],
      Python: [],
    }
  );

  //If objects contains some keys and values it will return result else null.
  if (Object.keys(userAndProgrammingLanguage).length > 0) {
    return userAndProgrammingLanguage;
  }
  return null;
}
module.exports = userBasedOnProgrammingLanguage; //Exporting modules for further use.
