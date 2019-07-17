
async function getUsers(){
    let result = await fetchJSON('/users')
    console.log(result)
}
