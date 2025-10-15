const BASE = "http://www.omdbapi.com/";

let _instance = null;
let _counter = 0;

class OmdbClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.instanceId = ++_counter;
    }

    async search(title) {
        const url = `${BASE}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}`;

        const res = await fetch(url);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        if (data.Response === "False") return [];
        return data.Search ?? [];
    }
}

export function getOmdb() {
    if (!_instance) {
        _instance = new OmdbClient("b6003d8a");
    }
    return _instance;
}