import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/dances/${id}`)
            .then(e => e.json())
    },
    searchDanceType(typeOfDance) {
        return fetch(
            `${settings.remoteURL}/dances?typeId=${typeOfDance}`
        )
            .then(e => e.json())
    },
    deleteDance: (id) => {
        return fetch(`${settings.remoteURL}/dances/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/dances`).then(e => e.json())
      },
    addDance(obj) {
        return fetch(`${settings.remoteURL}/dances`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(data => data.json())
    }
}