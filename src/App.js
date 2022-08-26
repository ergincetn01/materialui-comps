import "./App.css";
import FormComps from "./FormComps";
import Navig from "./Navig";
import { Container, Tab } from "@mui/material";
import TabView from "./Tabs";
import MenuView from "./Menu";
import CardView from "./CardView";

const App = () => {
  return (
    <div className="App">
      <CardView/>
      {/* <TabView /> */}
      {/* <MenuView/> */}
      {/* <Navig/>
      <FormComps/> */}
    </div>
  );
};

export default App;
