import React, { useState } from "react";
import "./Auth.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.inValid,
        formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please Enter a valid name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a Valid email addrress."
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
          errorText="Please enter a valid password."
        />
        <Button disabled={!formState.isValid}>
          {isLogin ? "Login" : "Signup"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLogin ? "SignUp" : "Login"}
      </Button>
    </Card>
  );
};
export default Auth;

// my code for switching in between sign in and sign up

// const [signupMode, setSignupMode] = useState(false);
// const [signinMode, setSigninpMode] = useState(true);

//   const switchToSignup = () => {
//     setSignupMode((prev) => !prev);
//     setSigninpMode((prev) => !prev);
//     console.log("Switching To Signup");
//   };
//   const switchToLogin = (event) => {
//     setSignupMode((prev) => !prev);
//     setSigninpMode((prev) => !prev);
//     console.log("Switching to Login");
//   };

//   return !signupMode ? (
//     <Card className="authentication">
//       <h2>Login Required</h2>
//       <hr />
//       <form onSubmit={authSubmitHandler}>
//         <Input
//           id="email"
//           element="input"
//           type="email"
//           label="E-mail"
//           validators={[VALIDATOR_EMAIL()]}
//           onInput={inputHandler}
//           errorText="Please enter a Valid email addrress."
//         />
//         <Input
//           id="password"
//           element="input"
//           type="password"
//           label="Password"
//           validators={[VALIDATOR_MINLENGTH(5)]}
//           onInput={inputHandler}
//           errorText="Please enter a valid password."
//         />
//         <Button disabled={!formState.isValid}>Login</Button>
//       </form>

//       {/* my code starts here for signup */}

//       <Button inverse onClick={switchToSignup}>
//         New User
//       </Button>
//       {/* my code ends here for signup */}
//     </Card>
//   ) : (
//     <Card className="authentication">
//       <h2>Sign Up</h2>
//       <hr />
//       <form onSubmit={authSubmitHandler}>
//         <Input
//           id="name"
//           element="input"
//           type="text"
//           label="Full Name"
//           validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
//           onInput={inputHandler}
//           errorText="Please enter a valid username"
//         />
//         <Input
//           id="email"
//           element="input"
//           type="email"
//           label="E-mail"
//           validators={[VALIDATOR_EMAIL()]}
//           onInput={inputHandler}
//           errorText="Please enter a Valid email addrress."
//         />
//         <Input
//           id="password"
//           element="input"
//           type="password"
//           label="Password"
//           validators={[VALIDATOR_MINLENGTH(5)]}
//           onInput={inputHandler}
//           errorText="Please enter a valid password."
//         />
//         <Button disabled={!formState.isValid}>Sign Up</Button>
//       </form>
//       <Button inverse onClick={switchToLogin}>
//         Sign In
//       </Button>
//     </Card>
//   );
// };
// export default Auth;
