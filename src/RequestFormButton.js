import React, { useContext } from "react";
import StyleContext from "./StyleContext";




export default function RequestFormButton() {
  const buttonStyling = React.useContext(StyleContext)
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}
