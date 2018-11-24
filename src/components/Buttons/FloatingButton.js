import React from "react";

const FloatingButton = ({ showAddForm }) => {
  return (
    <>
      <div className="fixed-action-btn">
        <a
          onClick={showAddForm}
          class="btn-floating btn-large waves-effect waves-light deep-purple darken-1"
        >
          <i class="material-icons">add</i>
        </a>
      </div>
    </>
  );
};

export default FloatingButton;
