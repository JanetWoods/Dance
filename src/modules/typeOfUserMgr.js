import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/typeOfUser/${id}`)
            .then(e => e.json())
    },
    searchTypeOfUser(typeOfUser) {
        return fetch(
            `${settings.remoteURL}/typeOfUser?typeId=${typeOfUser}`
        )
            .then(e => e.json())
    },
    deleteType: (id) => {
        return fetch(`${settings.remoteURL}/typeOfUser/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/typeOfUser`).then(e => e.json())
      },
    addType(type) {
        return fetch(`${settings.remoteURL}/typeOfUser`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        }).then(data => data.json())
    }
}