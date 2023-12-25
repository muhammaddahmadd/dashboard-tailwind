import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "./App.css";
import Section from "../src/Section";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Main from "./Main";
import Navbar from "./Navbar";

const App = () => {
  const { collapseSidebar, toggleSidebar, collapsed } = useProSidebar();

  return (
    <div
      className={`lg:flex h-screen ${
        collapsed ? "lg:ml-0" : "lg:ml-1/5 xl:ml-1/6"
      }`}
    >
      {/* Sidebar */}
      {window.innerWidth > 767 ? (
        <Sidebar
          className={`lg:w-1/5 xl:w-1/6 ${
            collapsed ? "hidden" : "block"
          } lg:block bg-blue-600`}
        >
          <Menu>
            <MenuItem
              className="menu1 hover:bg-blue-900"
              icon={
                <MenuRoundedIcon
                  className="text-white cursor-pointer"
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }
            >
              <h2>TimeBug</h2>
            </MenuItem>
          </Menu>
        </Sidebar>
      ) : null}

      {/* Section */}
      {/* <Section /> */}
      {/* <Main /> */}
      <div className="flex flex-col justify-center flex-grow-2">
        <Navbar />
        <Section />
      </div>

      {/* Mobile Navbar Toggle Button */}
      {window.innerWidth <= 767 ? (
        <MenuRoundedIcon
          className="lg:hidden fixed top-4 right-4 p-2 bg-blue-600 text-white rounded-full cursor-pointer"
          onClick={() => {
            toggleSidebar();
          }}
        />
      ) : null}
    </div>
  );
};

export default App;
