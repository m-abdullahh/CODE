import CustomNavBar from "./CustomNavBar";
import SelectTypePage from "./SelectTypePage";
function App() {
  return (
    <>
      <div className="flex min-h-screen items-center w-full flex-col bg-muted/40 px-2 py-2">
        <CustomNavBar />
        <SelectTypePage />
      </div>
    </>
  );
}

export default App;
