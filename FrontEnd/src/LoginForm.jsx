import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import CustomNavBar from "./CustomNavBar";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";

export function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { login, error, isLoading } = useLogin();
  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <div className="w-full md:h-screen  bg-muted/40">
      <div className="flex md:h-screen flex-col items-center  justify-start  w-full  bg-muted/40 p-2 min-h-screen">
        <CustomNavBar />
        <div className="w-full  md:w-96 px-4 mt-16 md:mt-28">
          <Form register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

const Form = ({ register, handleSubmit, onSubmit, isLoading }) => {
  return (
    <>
      <div className="mx-auto w-full  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required {...register("email")} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required {...register("password")} />
            </div>
            <Button disable={isLoading} type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};
