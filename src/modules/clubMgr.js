import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/clubs/${id}`)
            .then(e => e.json())
    },
    searchClub(clubName) {
        return fetch(
            `${settings.remoteURL}/clubs?clubName=${clubName}`
        )
            .then(e => e.json())
    },
    deleteClub: (id) => {
        return fetch(`${settings.remoteURL}/clubs/${id}`, {
            method: "DELETE"
        })
    },
    getAll() {
        return fetch(`${settings.remoteURL}/clubs`).then(e => e.json())
      },
    addClub(club) {
        return fetch(`${settings.remoteURL}/clubs`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(club)
        }).then(data => data.json())
    }
}