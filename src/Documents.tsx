import { FormEvent, useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { add, DocType, getProducts, remove } from "./features/docs/docsSlice";

export function Documents() {
  const {
    items: documents,
    error,
    isLoading
  } = useAppSelector((state) => state.docs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newDoc: DocType = {
      id: documents.length + 1,
      // TODO: implement dynamic values of title and body
      title: "My second title",
      body: "redux is fun"
    };

    dispatch(add(newDoc));
  };

  const handleDelete = (id: DocType["id"]) => {
    dispatch(remove(id));
  };

  if (error) {
    return <p>Something has gone wrong! {error.message}</p>;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>documents</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="body">Contents</label>
        <input type="text" id="body" name="body" />

        <button>Submit</button>
      </form>

      <ul>
        {documents.map((doc) => (
          <li
            key={doc.id}
            style={{ display: "flex", gap: 16, justifyContent: "center" }}
          >
            <h2>{doc.title}</h2>
            <button onClick={() => handleDelete(doc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
