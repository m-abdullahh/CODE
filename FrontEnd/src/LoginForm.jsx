import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import CustomNavBar from "./CustomNavBar";
import LogoUrl from "./assets/Logo.png";

export function LoginForm() {
  return (
    <div className="w-full md:h-screen  bg-muted/40">
      <div className="flex md:h-screen flex-col items-center  justify-start  w-full  bg-muted/40 p-2">
        <CustomNavBar />
        <div className="w-full  md:w-96 px-4 mt-16 md:mt-28">
          <Form />
        </div>
      </div>
    </div>
  );
}

const Form = () => {
  return (
    <>
      <div className="mx-auto w-full  ">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};
