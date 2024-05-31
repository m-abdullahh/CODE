import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomNavBar from "./CustomNavBar";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./components/ui/button";
import { Search } from "lucide-react";
import { toast, Toaster } from "sonner";
import SearchResult from "./SearchResult";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

const TrademarkSearchPage = () => {
  const [selectedOption, setSelectedOption] = useState("text");

  const { register, handleSubmit, reset } = useForm();
  const [results, setResults] = useState([]);
  const [isresponse, setisResponse] = useState(false);
  const [filters, setFilters] = useState("all");

  const onSubmit = async (data) => {
    console.log(data);
    if (selectedOption == "text") {
      try {
        const response = await axios.get("http://localhost:3000/trademark", {
          params: { text: data.search, caseType: "trademark" },
        });
        setResults(response.data);
        setisResponse(!isresponse);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      try {
        const response = await axios.get("http://localhost:3000/trademark", {
          params: { chapter: data.chapter, section: data.section, caseType: "trademark" },
        });
        setResults(response.data);
        setisResponse(true);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleFilterChange = (event) => {
    setFilters(event.target.value);
  };

  return (
    <div className="flex min-h-screen items-center w-full flex-col bg-muted/40 px-2 py-2">
      <CustomNavBar />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4">Trademark Ordinance Search</h3>
      <InputForm
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        reset={reset}
      />
      <div>
        <div className="w-full px-6">
          {isresponse && selectedOption == "text" && (
            <div className="flex w-full justify-between items-center">
              <p>{results.length} results found</p>
              <SelectForm handleFilterChange={handleFilterChange} />
            </div>
          )}
          <Separator className="my-4" />
          <div className="w-full">{results && results.map((result, index) => <SearchResult key={index} result={result} filters={filters} />)}</div>
        </div>
      </div>
    </div>
  );
};

const InputForm = ({ register, handleSubmit, reset, selectedOption, setSelectedOption }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex">
        <RadioGroup
          value={selectedOption}
          onValueChange={(value) => {
            setSelectedOption(value);
            reset();
          }}
          className="flex"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="text" id="r1" />
            <Label htmlFor="r1">By Text</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="column" id="r2" />
            <Label htmlFor="r2">By Chapter & Section </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="w-full flex flex-col items-center">
        {selectedOption === "text" && (
          <form className="flex w-full max-w-sm items-center py-6 gap-2" onSubmit={handleSubmit}>
            <Input type="search" id="text" placeholder="Enter your Case" {...register("search", { required: "Field is required" })} />
            <Button className="h-10 w-10 shrink-0" variant="outline" size="icon" type="submit">
              <Search strokeWidth={3} className="w-5 h-5" />
            </Button>
          </form>
        )}

        {selectedOption === "column" && (
          <form className="flex w-full max-w-sm items-center py-6 gap-2" onSubmit={handleSubmit}>
            <Input type="number" id="chapter" placeholder="Chapter No." {...register("chapter", { required: "Chapter field is required" })} />
            <Input type="number" id="section" placeholder="Section No." {...register("section", { required: "Section field is required" })} />
            <Button className="h-10 w-10 shrink-0" variant="outline" size="icon" type="submit">
              <Search strokeWidth={3} className="w-5 h-5" />
            </Button>
          </form>
        )}
      </div>

      <Toaster />
    </div>
  );
};

const SelectForm = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange}>
    <option value="all">All</option>
    <option value="text">Text</option>
    <option value="column">Column</option>
  </select>
);

export default TrademarkSearchPage;
