import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Search from "./Search.jsx";
// import search component and use here to ensure validation without repeating code to stay DRY
function Modern() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="content">
      <div id="modern">
        <h2>Search Our database of studies</h2>

        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            onChange={inputHandler}
            value={inputText}
          />
        </div>
      </div>

      <Search input={inputText} />
    </div>
  );
}

export default Modern;
