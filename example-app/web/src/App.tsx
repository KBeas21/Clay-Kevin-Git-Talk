import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { Note } from "../../types/note";
import { getNotes } from "./api";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";

const queryClient = new QueryClient();

function Notes() {
  const { data, isFetching } = useQuery<Note[]>("notes", getNotes);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <div style={{ textAlign: "center" }}>
            <h1>Notes</h1>
          </div>
          <div>
            <ul>
              {data?.map((d, index) => (
                <li key={index}>{d.content}</li>
              ))}
            </ul>
          </div>
        </>
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
