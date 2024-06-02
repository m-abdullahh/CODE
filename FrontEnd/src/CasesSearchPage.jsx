import axios from "axios";
import CustomNavBar from "./CustomNavBar";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { Separator } from "@/components/ui/separator";
import SelectForm from "./Temp";

const CasesSearchPage = () => {
  const { register, handleSubmit } = useForm();
  const [results, setResults] = useState([]);
  const [isresponse, setisResponse] = useState(false);
  const [filters, setFilters] = useState("all");

  const handleFilterChange = (value) => {
    setFilters(value);
    console.log(value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.get("http://localhost:3000/cases", {
        params: { text: data.search, caseType: "general" },
      });
      setResults(response.data);
      setisResponse(!isresponse);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className=" flex items-center w-full flex-col px-2 py-2 bg-muted/40 min-h-screen">
      <CustomNavBar />
      <h3 className="text-2xl font-semibold text-center">Search Any Case</h3>
      <InputForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
      <div className="w-full px-6">
        {isresponse && (
          <div className="flex w-full justify-between items-center">
            <p>{results.length} results found</p>
            <SelectForm handleFilterChange={handleFilterChange} />
          </div>
        )}
        {isresponse && <Separator className="my-4" />}
        <div className="w-full">{results && results.map((result, index) => <SearchResult key={index} result={result} filters={filters} />)}</div>
      </div>
    </div>
  );
};

const InputForm = ({ register, handleSubmit, onSubmit }) => {
  return (
    <div className="w-full flex justify-center">
      <form className="flex w-full max-w-sm items-center py-6 gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input type="search" id="search" placeholder="Enter your Case" {...register("search")} />
        <Button className="h-10 w-10 shrink-0" variant="outline" size="icon" type="submit">
          <Search strokeWidth={3} className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};

export default CasesSearchPage;
