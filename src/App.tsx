import * as React from "react";
import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import MediaQuery from 'react-responsive';
import { LoginForm } from "./components/LoginForm";
import { Grid, GridColumn } from "semantic-ui-react";
import { Nav } from "./components/nav";

class App extends React.Component {
  
  public render() {
    
    return (
      
      <div className="main">

<Grid.Column>
<Header />

  </Grid.Column>
  <GridColumn>
    <Nav/>
  </GridColumn>
  <Grid.Column>
  <LoginForm/>

  </Grid.Column>

        
       
      
      </div>
    );
  }
}

export default App;