import { useState, useEffect } from 'react'
import './App.css'
import UserList from './components/UserList'
import Post from './components/Post'
import Movies from './components/Movies'



function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div style={{ maxWidth: 900, margin: "24px auto", fontFamily: "system-ui, sans-serif" }}>
    //   <h1>Singleton vs Lazy Singleton (React Demo)</h1>
    //   <p style={{ color: "#555" }}>
    //     The eager singleton is created immediately when the module loads.
    //     The lazy singleton is created only when <code>getApiClient()</code> is first called.
    //   </p>
    //   <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
    //     <UserList />
    //     <Post />
    //   </div>
    // </div>

  <>
    <h2>Movies</h2>
    <Movies />
  </>
  )
}

export default App
