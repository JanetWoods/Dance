import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/typesOfEvents/${id}`)
            .then(e => e.json())
    },
    searchType(type) {
        return fetch(
            `${settings.remoteURL}/typesOfEvents?nameType=${type}`
        )
            .then(e => e.json())
    },
    deleteType: (id) => {
        return fetch(`${settings.remoteURL}/typesOfEvents/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/typesOfEvents`).then(e => e.json())
      },
    addType(type) {
        return fetch(`${settings.remoteURL}/typesOfEvents`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        }).then(data => data.json())
    }
}