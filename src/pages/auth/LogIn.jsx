import React, { useEffect, useState } from "react";

const LogIn = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  // Regex to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation function
  const validateValues = () => {
    let errors = {};

    if (!inputFields.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(inputFields.email)) {
      errors.email = "Invalid email format";
    }

    if (!inputFields.password) {
      errors.password = "Password is required";
    } else if (inputFields.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
  };

  return (
    <div className={`w-1/2 flex flex-col justify-center items-center`}>
      <h1 className="text-3xl font-bold text-gray-700">Sign In</h1>
      <form
        action=""
        className="mt-10 w-full flex flex-col px-8 gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="email"
            className={`border border-primaryBlue rounded-[4px] p-2 bg-gray-50 w-full placeholder:text-gray-500 text-textSecondary ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email"
            value={inputFields.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm w-full flex justify-end">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            className={`border border-primaryBlue rounded-[4px] p-2 bg-gray-50 w-full placeholder:text-gray-500 text-textSecondary ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="Password"
            value={inputFields.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm w-full flex justify-end">
              {errors.password}
            </p>
          )}
        </div>
        <button className="text-sm text-textSecondary items-start flex w-full">
          Forgot Password?
        </button>

        <button
          type="submit"
          className="mt-10 w-1/3 bg-primaryBlue hover:bg-[#3367ec] hover:transition-colors duration-300 p-2 rounded-full text-white font-semibold mx-auto"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
