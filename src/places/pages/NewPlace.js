import React, { useCallback } from "react";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

function NewPlace() {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title  "
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid description (at least 5 caharacters)"
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid input"
        onInput={descriptionInputHandler}
      />
    </form>
  );
}

export default NewPlace;
