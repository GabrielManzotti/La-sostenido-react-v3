import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function Search() {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => alert("Hello World")}
        sx={{ mt: 4 }}
      >
        Contained
      </Button>
      <form className="Form" >
        <TextField
          placeholder="Buscar usuario"
          variant="outlined"
          className="Textfield"

        />
        <button className="btn" type="submit">
          Buscar
        </button>
      </form>
    </div>
  )
}

export default Search