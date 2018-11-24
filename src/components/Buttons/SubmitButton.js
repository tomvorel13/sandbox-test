import React from "react";

const SubmitButton = () => {
  return (
    <button
      class="btn waves-effect waves-light deep-purple darken-1"
      type="submit"
      name="action"
    >
      Add Album
      <i class="material-icons right">send</i>
    </button>
  );
};

export default SubmitButton;
