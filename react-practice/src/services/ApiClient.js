// src/services/ApiClient.js
const BASE_URL = "https://jsonplaceholder.typicode.com";

class ApiClient {
    static _counter = 0;
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.instanceId = ++ApiClient._counter; // for proving singleton
    }
    async get(path) {
        const res = await fetch(this.baseURL + path);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    }
}

export const apiClient = new ApiClient(BASE_URL); // Eager singleton
