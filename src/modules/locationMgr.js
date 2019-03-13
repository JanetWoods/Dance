import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/locations/${id}`)
            .then(e => e.json())
    },
    deleteLocation: (id) => {
        return fetch(`${settings.remoteURL}/locations/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/locations`).then(e => e.json())
      },
    addLocation(location) {
        return fetch(`${settings.remoteURL}/locations`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        }).then(data => data.json())
    },
    searchLocationState(state) {
        return fetch(
            `${settings.remoteURL}/locations?state=${state}`
        )
            .then(e => e.json())
    },
    updatelocation(location) {
        return fetch(`${settings.remoteURL}/locations/${location.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        }).then(data => data.json())
    }
}