import React from "react";
import { useForm } from "react-hook-form";

export const RegisterDemo1 = () => {
  const { register, handleSubmit,formState:{errors} } = useForm({
    mode: "onBlur",
  });
  const registerMeta ={

    UserName :{required:'*UserName is required'},
    password: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must have at least 8 characters"
        }
      }
  }
  const submit = (data) => {
    console.log("form data", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" {...register("UserName",registerMeta.UserName)} />
          <span>
            {errors.UserName && errors.UserName.message}
          </span>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" {...register("password",registerMeta.password)} />
            <span>
                {errors.password && errors.password.message}
            </span>
        </div>


         
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
