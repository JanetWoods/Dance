import settings from "./settings"

export default {
    get(id){
        return fetch(`${settings.remoteURL}/users/${id}`)
        .then(e=>e.json())
    }
}