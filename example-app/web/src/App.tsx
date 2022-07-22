import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { getNotes } from "./api";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";

const queryClient = new QueryClient();

function Notes() {
  const { data, isFetching } = useQuery("notes", getNotes);

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "center" }}>
            <h1>Notes</h1>
          </div>
          <div>
            <ul>
              {Object.keys(data).map((key, index) => (
                <li key={index}>{data[key].content}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
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
