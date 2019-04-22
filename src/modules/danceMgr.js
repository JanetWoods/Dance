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
        return fetch(`${settings.remoteURL}/dances`)
        .then(e => e.json())
      },
    getDanceByType() {
        return fetch(`${settings.remoteURL}/dances?_expand=typeOfEvent`).then(e => e.json())
      },
    getDanceDetail() {
        return fetch(`${settings.remoteURL}/dances?_expand=club&_expand=location&_expand=typeOfEvent`)
        .then(e => e.json())
      },
    getDanceByStateDetail(stateId) {
        return fetch(`${settings.remoteURL}/locations?stateId=${stateId}&embed=dances?_expand=club&_expand=location&_expand=typeOfEvent`)
        .then(e => e.json())
      },
    getTHISDanceDetail(id) {
        return fetch(`${settings.remoteURL}/dances/${id}?_expand=club&_expand=location&_expand=typeOfEvent`).then(e => e.json())
      },
      deleteDanceDetail: (id) => {
        return fetch(`${settings.remoteURL}/dances/${id}`, {
            method: "DELETE"
        })
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