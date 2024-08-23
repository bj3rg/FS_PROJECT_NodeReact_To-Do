import React from "react";

export default function InputField({
  type,
  placeholder,
  otherStyle,
  register,
  name,
  id,
  value,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={
          "border border-2 border-slate-500 rounded-xl p-1.5 " + otherStyle
        }
        id={id}
        value={value}
        {...register(name, { required: true })}
      />
    </div>
  );
}
