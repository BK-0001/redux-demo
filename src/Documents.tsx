import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";

export function Documents() {
  const documents = useSelector((state: RootState) => state.docs.items);
  return (
    <div>
      <h1>documents</h1>

      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
}
