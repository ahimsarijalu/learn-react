import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

export default function AuthPage({ destination }: { destination: string }) {
  const navigate = useNavigate();

  function handleTab(value: string) {
    // Navigate to the corresponding route when the tab changes
    navigate(value === "register" ? "/auth/register" : "/auth/login");
  }

  return (
    <Tabs
      value={destination} // Sync tabs with the current URL
      onValueChange={handleTab}
      className="w-full flex flex-grow flex-col justify-center items-center"
    >
      <TabsList>
        <TabsTrigger value="register">Register</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="register">
        {destination === "register" && <RegisterPage />}
      </TabsContent>
      <TabsContent value="login">
        {destination === "login" && <LoginPage />}
      </TabsContent>
    </Tabs>
  );
}
