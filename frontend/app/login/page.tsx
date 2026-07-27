import LeftPanel from "@/components/login/left";
import LoginForm from "@/components/login/login";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      <LeftPanel />
      <LoginForm />
    </main>
  );
}

