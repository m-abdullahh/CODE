import LogoUrl from "./assets/Logo.png";
import { Link } from "react-router-dom";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { EllipsisVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./components/ui/button";
import { useLogout } from "./hooks/useLogout";
import { AuthContext } from "./context/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";

const CustomNavBar = () => {
  return (
    <div className="w-full pb-2">
      <nav className="flex justify-between ">
        <Link to="/">
          <img src={LogoUrl} className="w-auto h-9" alt="" />
        </Link>
        <CustomDrawer />
      </nav>
    </div>
  );
};

const CustomDrawer = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleclick = () => logout();

  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
          <EllipsisVertical />
        </DrawerTrigger>
        <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[250px] sm:w-[300px] rounded-none">
          <DrawerHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Label>Muhammad Abdullah</Label>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            {user ? (
              <Button onClick={handleclick}>Logout</Button>
            ) : (
              <div className="flex flex-col justify-center space-y-2 ">
                <Button>
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button>
                  <Link to={"/signup"}>Signup</Link>
                </Button>
              </div>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomNavBar;
