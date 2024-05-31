import { Separator } from "@/components/ui/separator";

const SearchResult = ({ result, filters }) => {
  return (
    <div className="px-2 w-full">
      <div className="flex justify-between">
        <h3 className="font-medium">{result.title}</h3>
        <h3 className="text-sm font-medium">Sec. {result.sect_no}</h3>
      </div>
      {filters == "all" && (
        <div>
          <p className="text-xs pb-2 text-stone-600">{result.desc}</p>
          <p className="text-xs text-stone-600">{result.hearings}</p>
        </div>
      )}
      {filters == "hearings" && <p className="text-xs text-stone-600">{result.hearings}</p>}

      {filters == "desc" && <p className="text-xs text-stone-600">{result.desc}</p>}
      <Separator className="my-4" />
    </div>
  );
};

export default SearchResult;
