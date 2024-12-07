import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

const SignUp = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [inputFields, setInputFields] = useState({
    name: "",
    bio: "",
    email: "",
    username: "",
    password: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateValues = () => {
    let errors = {};
    if (!profileImage) {
      errors.profileImage = "Profile image is required";
    }
    if (!inputFields.name) {
      errors.name = "Name is required";
    }
    if (!inputFields.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(inputFields.email)) {
      errors.email = "Invalid email format";
    }
    if (!inputFields.username) {
      errors.username = "Username is required";
    }
    if (!inputFields.password) {
      errors.password = "Password is required";
    } else if (inputFields.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
    const validationErrors = validateValues();
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateValues();
    setErrors(validationErrors);
  };

  return (
    <div className={`w-1/2 flex flex-col justify-center items-center`}>
      <h1 className="text-3xl font-bold text-gray-700">Sign Up</h1>
      <div className="relative mt-5">
        {/* Profile Icon */}
        <FaCircleUser className="w-24 h-24 text-gray-300" />

        {/* Camera Icon with File Input */}
        <label
          htmlFor="file-input"
          className="absolute bottom-0 right-2 cursor-pointer"
        >
          <FaCamera className="w-6 h-6 text-gray-600" />
          {/* Hidden File Input */}
          <input
            type="file"
            id="file-input"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        {errors.profileImage && (
          <p className="text-red-500 text-sm w-40 flex justify-end mt-1 absolute -left-10">
            {errors.profileImage}
          </p>
        )}
      </div>

      <form
        action=""
        className="mt-8 w-full flex flex-col gap-4 items-center px-8"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <div className="w-full">
          <input
            type="text"
            name="name"
            className="border border-primaryBlue rounded-[4px] p-2 bg-gray-50 w-full placeholder:text-gray-500 text-textSecondary"
            placeholder="Name"
            value={inputFields.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm w-full flex justify-end">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full">
          <input
            type="email"
            name="email"
            className="border border-primaryBlue rounded-[4px] p-2 bg-gray-50 w-full placeholder:text-gray-500 text-textSecondary"
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
        {/* Username Field */}
        <div className="w-full">
          <input
            type="text"
            name="username"
            className="border border-primaryBlue rounded-[4px] p-2 bg-gray-50 w-full placeholder:text-gray-500 text-textSecondary"
            placeholder="Username"
            value={inputFields.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-500 text-sm w-full flex justify-end">
              {errors.username}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="w-full">
          <input
            type="password"
            name="password"
            className="border border-primaryBlue rounded-[4px] p-2 bg-gray-50 w-full placeholder:text-gray-500 text-textSecondary"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-1/3 bg-primaryBlue hover:bg-[#3367ec] hover:transition-colors duration-300 p-2 rounded-full text-white font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
