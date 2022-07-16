import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { getNotes } from "./api";
import "./App.css";

const queryClient = new QueryClient();

function Notes() {
  const { data, isFetching } = useQuery("notes", getNotes);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Notes</h1>
      </div>
      {isFetching ? (
        <div style={{ textAlign: "center" }}>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <ul>
            {Object.keys(data).map((key, index) => (
              <li key={index}>{data[key].content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Notes />
    </QueryClientProvider>
  );
}

export default App;
