import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLoginSchema } from "./getLoginSchema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

interface FormInputs {
  email: string;
  password: string;
  server?: string;
}

export const useLoginForm = () => {
  const schema = getLoginSchema();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const isDisabled = !isValid || isSubmitting;

  useEffect(() => {
    if (Cookies.get("token")) {
      router.push("/todo");
    }
  }, [router]);

  const handleLogin = async ({ password, email }: FormInputs) => {
    const response = await fetch(
      "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
      {
        method: "POST",
        body: new URLSearchParams({
          email,
          password,
        }),
      }
    );

    if (response.status !== 200) {
      setError("server", {
        message: "The server could not be reached. Please try again later.",
      });
    } else {
      const { user_token } = await response.json();
      Cookies.set("token", user_token);
      router.push("/todo");
    }
  };

  return {
    emailProps: register("email"),
    passwordProps: register("password"),
    errors,
    isDirty,
    isDisabled,
    onSubmit: handleSubmit(handleLogin),
  };
};
