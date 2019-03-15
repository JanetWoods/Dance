import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/users/${id}`)
            .then(e => e.json())
    },
    searchUandP(username, password) {
        return fetch(
            `${settings.remoteURL}/users?username=${username}&password=${password}`
        )
            .then(e => e.json())
    },
    getAll() {
        return fetch(`${settings.remoteURL}/users`).then(e => e.json())
      },
    searchUserName(username) {
        return fetch(`${settings.remoteURL}/users?username=${username}`)
            .then(e => e.json())
    },
    addUser(obj) {
        return fetch(`${settings.remoteURL}/users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(data => data.json())
    },
    updateUser(user) {
        return fetch(`${settings.remoteURL}/users/${user.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(data => data.json())
    }
}