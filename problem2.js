//Find all users staying in Germany.
function usersNationalityGermany(users){
    //Initialising an empty array
    const germanyUser=[]
    //Iterating every user from users object
    for(let user in users){
        //checks if germany as nationality of users
        if(users[user].nationality==="Germany"){
            germanyUser.push(user); //appends user if found nationality as germany
        }
    }
    return germanyUser;

}
module.exports=usersNationalityGermany;