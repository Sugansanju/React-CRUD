import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function UserForm({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  const handleSelect = (e) => {
    setValue("jobRole", e.target.textContent);

  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be more than 4 characters",
              },
              maxLength: {
                value: 15,
                message: "Name cannot exceed more than 15 characters",
              },
            })}
          />
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter valid email",
              },
            })}
          />
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            name="empId"
            placeholder="Employee Id"
            aria-invalid={errors.empId ? "true" : "false"}
            {...register("empId", {
              required: "Employee Id is required",
              minLength: {
                value: 4,
                message: "Employee Id must be more than 4 characters",
              },
            })}
          />
          {errors.empId && (
            <span className="error-msg">{errors.empId.message}</span>
          )}
        </div>
        <div>
          <input
            type="mobile"
            name="mobile"
            placeholder="Mobile"
            {...register("mobile", {
              required: "Mobile is required",
              pattern: {
                value: /[0-9]{10}/,
                message: "Enter valid Mobile number",
              },
            })}
          />
          {errors.mobile && (
            <span className="error-msg">{errors.mobile.message}</span>
          )}
        </div>

        <div>
          <select
            {...register("jobRole", {
              required: "Please select any job role !",
            })}
            defaultValue=""
            // onChange={(e) => handleSelect(e)}
          >
            <option value="" disabled>
              ---Select Job Role---
            </option>
            <option value="FullStack Developer">FullStack Developer</option>
            <option value="MERN Stack Developer">MERN Stack Developer</option>
            <option value="ReactJs Developer">ReactJs Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>
          {errors.jobRole && (
            <span className="error-msg">{errors.jobRole.message}</span>
          )}
        </div>
        <button type="submit" style={{ backgroundColor: "green" }}>
          Add
        </button>
      </form>
    </>
  );
}

export default UserForm;
