import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SearchBar({searchText}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text)
    setText("");
    
  };
  return (
    <Form className="formBody" onSubmit={(e) => handleSubmit(e)}>
      <Form.Control
        type="text"
        placeholder="Eg: education"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div style={{ width: "50px" }}></div>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
