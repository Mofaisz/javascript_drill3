//function to get only video game players
function getVideoGamePlayers(users) {
  //checks for falsy values
  if (!users) {
    return null;
  }

  // Extracting only keys of users to implement Array methods.
  const videoGameUsers = Object.keys(users).reduce(
    (accumulator, initialValue) => {
      // checks wether video Games is included in interests
      if (users[initialValue].interests[0].includes("Video Games")) {
        accumulator.push(initialValue); //pushing initialValue(user name) into accumulator
      }
      return accumulator;
    },
    [] // taking accumulator as empty array
  );

  // checks if videoGameusers list is empty or not
  if (Object.keys(videoGameUsers).length > 0) {
    return videoGameUsers;
  }
  return null;
}

module.exports = getVideoGamePlayers;
