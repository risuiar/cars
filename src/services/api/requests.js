const base = "https://dash.emilfrey.ch/api/v1"

const requests = {
    criteria: `${base}/de/search-criteria`,
    list: `${base}/cars`,
    details: (id) => {
        return `${base}/cars/${id}`
    }
}

export default requests
