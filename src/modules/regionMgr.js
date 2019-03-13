import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/regions/${id}`)
            .then(e => e.json())
    },
    searchDanceType(region) {
        return fetch(
            `${settings.remoteURL}/regions?nameRegion=${region}`
        )
            .then(e => e.json())
    },
    deleteDance: (id) => {
        return fetch(`${settings.remoteURL}/regions/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/regions`).then(e => e.json())
      },
    addRegion(region) {
        return fetch(`${settings.remoteURL}/regions`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(region)
        }).then(data => data.json())
    }
}