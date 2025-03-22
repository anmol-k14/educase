import React from "react";

const RadioButton = ({title}) => {
  return (
    <>
      <form className="my-form">
        <div>
          <input id="radio-1" type="radio" name="option" />
          <label htmlFor="radio-1">{title}</label>
        </div>
      </form>
    </>
  );
};

export default RadioButton;
