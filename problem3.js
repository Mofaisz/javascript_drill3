//Q3 Find all users with masters Degree.
function masterDegreeHolder(users){
    masterDegree=[];
    for(let user in users){
        if(users[user].qualification==="Masters"){
            masterDegree.push(user)
        }
    }return masterDegree
}
module.exports=masterDegreeHolder;