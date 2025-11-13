import Header from "../dashboard/Header";
import MobileNavbar from "../dashboard/MobileNavbar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <Header />
      <main className="pb-20">
        <Outlet />
      </main>
      <MobileNavbar />
    </>
  );
}
