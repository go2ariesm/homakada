import "./App.css";
import NavigationBar from "./component/NavigationBar";
import Section_2 from "./component/Section_2";
import Section_3 from "./component/Section_3";
import Frequently from "./component/Frequently";
import FooterMenu from "./component/FooterMenu";
import { Container, Col, Row } from "react-bootstrap";
import "./style/HomeKada.css";

function App() {
  return (
    <div>
      <div>
        <NavigationBar />
        <div className="section-2">
          <Section_2 />
        </div>
        <div className="section-2">
          <Section_3 />
        </div>
        <div className="section-2">
          <Frequently />
        </div>
        <div className="section-2">
          <FooterMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
