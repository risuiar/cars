const base = "https://dash.emilfrey.ch/api/v1/de"

const requests = {
    criteria: `${base}/search-criteria`,
    cars: `${base}/cars`,
    car: (id) => {
        return `${base}/cars/${id}`
    }
}

export default requests
