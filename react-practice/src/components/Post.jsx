// src/components/Post.jsx
import { useEffect, useMemo, useState } from "react";
import { getApiClient } from "../services/lazyApiClient";

export default function Posts() {
    const api = useMemo(() => getApiClient(), []);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    const sameInstanceTwice = api === getApiClient();

    useEffect(() => {
        api.get("/posts").then(setPosts).catch(e => setError(String(e)));
    }, [api]);

    return (
        <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
            <h2>Posts (Lazy Singleton)</h2>
            <p><strong>getApiClient().instanceId:</strong> {api.instanceId}</p>
            <p><strong>Same instance when called twice?</strong> {String(sameInstanceTwice)}</p>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <ol>
                {posts.slice(0, 5).map(p => <li key={p.id}>{p.title}</li>)}
            </ol>
        </div>
    );
}
