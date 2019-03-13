import settings from "./settings"

export default {
    getDance(id) {
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
    addDance(dance) {
        return fetch(`${settings.remoteURL}/dances`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dance)
        }).then(data => data.json())
    },
    updateDance(dance) {
        return fetch(`${settings.remoteURL}/dances/${dance.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dance)
        }).then(data => data.json())
    }
}