// src/components/UserList.jsx
import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get("/users").then(setUsers).catch(e => setError(String(e)));
    }, []);

    return (
        <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
            <h2>UserList (Eager Singleton)</h2>
            <p><strong>apiClient.instanceId:</strong> {apiClient.instanceId}</p>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <ul>
                {users.slice(0, 5).map(u => 
                <li key={u.id}>{u.name}</li>
                )}
            </ul>
        </div>
    );
}
