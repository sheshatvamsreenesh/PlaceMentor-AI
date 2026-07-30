import LeftPanel from "@/components/login/left";
import RegisterForm from "@/components/register/register";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      <LeftPanel />
      <RegisterForm />
    </main>
  );
}