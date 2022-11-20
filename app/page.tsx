import { PageHeader } from "../components/PageHeader";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col p-3 items-center lg:w-1/2 h-full w-full">
      <PageHeader title="Rapptr Labs" />
      <LoginForm />
    </div>
  );
}
