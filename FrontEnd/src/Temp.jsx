import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectForm({ handleFilterChange }) {
  return (
    <>
      <Select onValueChange={handleFilterChange}>
        <SelectTrigger className="w-[90px] md:w-[120px]">
          <SelectValue placeholder="Select" defaultValue="all" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="desc">Desc</SelectItem>
          <SelectItem value="hearings">Hearings</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectForm;
