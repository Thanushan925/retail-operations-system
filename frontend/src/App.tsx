import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setBackendStatus(data.message);
      })
      .catch(() => {
        setBackendStatus("Backend connection failed.");
      });
  }, []);

  return (
    <main>
      <h1>Retail Operations System</h1>
      <p>{backendStatus}</p>
    </main>
  );
}

export default App;