//function to get only video game players
function getVideoGamePlayers(users) {
  //checks for falsy values
  if (!users) {
    return null;
  }
  //Initialising an empty array
  const videoGameUsers = [];
  //Iterating every user from users object
  for (let user in users) {
    //checks if video games is included in users interests
    if (users[user].interests[0].includes("Video Games")) {
      videoGameUsers.push(user); //append if user is interested in video games
    }
  }
  if (videoGameUsers.length > 0) {
    return videoGameUsers;
  }
  return null;
}
module.exports = getVideoGamePlayers;
