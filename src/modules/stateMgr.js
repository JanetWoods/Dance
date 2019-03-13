import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/states/${id}`)
            .then(e => e.json())
    },
    searchState(state) {
        return fetch(
            `${settings.remoteURL}/states?stateShort=${state}`
        )
            .then(e => e.json())
    },
    getAll() {
        return fetch(`${settings.remoteURL}/states`).then(e => e.json())
      }
}