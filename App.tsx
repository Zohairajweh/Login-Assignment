import * as React from "react";
import { Header } from "./src/components/Header";
import MediaQuery from "react-responsive";
import { LoginForm } from "src/components/LoginForm";
// import { Form } from "./Form";

class App extends React.Component {
  public render() {
    return (
      <div className="main">
              <Header />
        <MediaQuery query="(min-width: 768px)">
          
          <LoginForm/>
        </MediaQuery>

      </div>
    );
  }
}

export default App;