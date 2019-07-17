// ASYNC - AWAIT : EJEMPLO 7 (15 minutos)

async function getUserFriends(){
    let user = await fetchJSON('users/me')
    let friendsIDs = await fetchJSON(`/friends/${user.id}`)
    let promises = friendIDs.map((id) => {
        return fetchJSON(`/users/${id}`);
    })
    let friends = await Promise.all(promises)
    console.log(friends)
}
let promise = getUserFriends()
