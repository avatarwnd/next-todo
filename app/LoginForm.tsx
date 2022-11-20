"use client";
import { FormInput } from "../components/FormInput";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = () => {
  const { emailProps, passwordProps, onSubmit, errors, isDisabled } =
    useLoginForm();

  return (
    <form className="flex flex-col w-full" onSubmit={onSubmit}>
      <FormInput
        label="Email"
        placeholder="user@rapptrlabs.com"
        {...emailProps}
        error={errors.email?.message}
        type="email"
      />
      <FormInput
        placeholder="Must be at least 4 characters"
        label="Password"
        {...passwordProps}
        error={errors.password?.message}
        type="password"
      />
      <button
        className={`flex justify-center items-center bg-blue-500 ${
          isDisabled ? "text-gray-400" : "text-white"
        } h-10 rounded-sm mt-4 border-4 border-black text-2xl`}
        type={"submit"}
        disabled={isDisabled}
      >
        Login
      </button>
      {errors.server?.message && (
        <span className="text-red-500 flex justify-center">
          {errors.server?.message}
        </span>
      )}
    </form>
  );
};
