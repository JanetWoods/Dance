import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/typeOfEvents/${id}`)
            .then(e => e.json())
    },
    searchType(type) {
        return fetch(
            `${settings.remoteURL}/typeOfEvents?nameType=${type}`
        )
            .then(e => e.json())
    },
    deleteType: (id) => {
        return fetch(`${settings.remoteURL}/typeOfEvents/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/typeOfEvents`).then(e => e.json())
        },
    addType(type) {
        return fetch(`${settings.remoteURL}/typeOfEvents`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        }).then(data => data.json())
    }
}