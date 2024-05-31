import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./components/ui/button";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import CustomNavBar from "./CustomNavBar";

const SelectTypePage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      type: "r1",
    },
  });

  const onSubmit = (selectedValue) => {
    console.log(selectedValue.type);
    switch (selectedValue.type) {
      case "r1":
        navigate("/cases");
        break;
      case "r2":
        navigate("/copyright");
        break;
      case "r3":
        navigate("/trademark");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex min-h-screen items-center w-full flex-col bg-muted/40 px-2 py-2">
      <CustomNavBar />
      <Form {...form}>
        <Toaster />
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-6 flex flex-col justify-center items-center">
          <div className="flex flex-col  items-center">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">Select your Search Type</h2>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="py-6">
                  <FormControl>
                    <RadioGroup
                      className="sm:flex sm:flex-row sm:justify-center"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      name="type" // Add name attribute to the RadioGroup
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="r1" id="r1" />
                        <FormLabel htmlFor="r1">By Cases</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="r2" id="r2" />
                        <FormLabel htmlFor="r2">By Copyright ordinance</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="r3" id="r3" />
                        <FormLabel htmlFor="r3">By Trademark ordinance</FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SelectTypePage;
