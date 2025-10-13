const BASE_URL = "https://jsonplaceholder.typicode.com";

class ApiClient {
  static _counter = 0;
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.instanceId = ++ApiClient._counter;
  }
  async get(path) {
    const res = await fetch(this.baseURL + path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
}

let _instance = null;

// IMPORTANT: named export (not default)
export function getApiClient() {
  if (!_instance) {
    _instance = new ApiClient(BASE_URL);
  }
  return _instance;
}
