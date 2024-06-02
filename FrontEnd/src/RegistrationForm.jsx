import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomNavBar from "./CustomNavBar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "./hooks/useSignup";
import { Toaster, toast } from "sonner";
export function RegistrationForm() {
  const { register, handleSubmit } = useForm();
  const { signup, error, isLoading } = useSignup();

  const onSubmit = async (data) => {
    const { fname, lname, email, password } = data;
    await signup(fname, lname, email, password);
    if (error) toast.error(error);
  };

  return (
    <div className="flex md:h-screen flex-col items-center  justify-start  w-full  bg-muted/40 p-2 min-h-screen">
      <Toaster />
      <CustomNavBar />
      <div className="w-full  md:w-96 px-4 mt-16 md:mt-28">
        <Form register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

const Form = ({ register, handleSubmit, onSubmit, error, isLoading }) => {
  return (
    <div className="flex flex-col  items-center space-y-6">
      <h1 className="text-4xl font-bold">SIGNUP!!</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required {...register("fname")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required {...register("lname")} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required {...register("email")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
          </div>
          <Button disabled={isLoading} type="submit" className="w-full">
            Create an account
          </Button>
        </div>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};
