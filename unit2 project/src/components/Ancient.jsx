import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Search from "./Search.jsx";
import texts from "../assets/texts.jpg";

// material UI is a react ui library that allows for this search bar functionality imported here
// Imported search component to keep code DRY and allow validation without repeating code
function Ancient() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <div className="content">
        <div id="Ancient">
          <h2>Search Our database of Ancient texts</h2>

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
    </div>
  );
}

export default Ancient;
