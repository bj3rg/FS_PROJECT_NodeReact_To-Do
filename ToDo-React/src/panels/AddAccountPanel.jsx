import React from "react";
import InputField from "../component/InputField";
import Button from "../component/Button";
import { useForm } from "react-hook-form";
import baseURL from "../api.jsx";
export default function AddAccountPanel() {
  const ADDNAME_URL = "/user/create";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await baseURL.post(ADDNAME_URL, data);
    console.log(response);
  };

  return (
    <div className="h-[80%]">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            placeholder="Add your name"
            type="text"
            name="name"
            register={register}
            id="name"
          />
          <Button name="Add" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}
