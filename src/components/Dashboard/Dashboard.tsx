import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./style.scss";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      {/* <h1>This is dashboard</h1> */}
      <div className="childrens">
        <Outlet />
      </div>
    </>
  );
}
