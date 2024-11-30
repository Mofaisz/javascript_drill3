//function to get only vide game players
function getVideoGamePlayers(users) {
    //Initialising an empty array
  const videoGameUsers = [];
  //Iterating every user from users object
  for (let user in users) {
    //checks if video games is included in users interests
    if (users[user].interests[0].includes("Video Games")) {
      videoGameUsers.push(user);    //append if user is interested in video games
    }
  }
  return videoGameUsers;
}
module.exports = getVideoGamePlayers;
