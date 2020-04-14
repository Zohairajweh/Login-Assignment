import * as React from "react";
import { Card, Icon, Button } from 'semantic-ui-react';


export class LoginForm extends React.Component{
 public state = {
    username: "",
    password: "",
    loggedin: false,
  };

  public handleChange = (e: any) => {
      this.setState({
        [e.target.name]: e.target.value
      });
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();

    this.setState({
      loggedin: true,
    });

  }

  public handleLogout = (e: any) => {
    this.setState({
      loggedin: false,
    });
    
  }

 public render(){
 

   if(this.state.loggedin === true)
   
   { return(
            <form >
            <div >
          <div  />
          <Button content="Log Out" onClick={e => this.handleLogout(e)} />
            </div>
           <Card className="cardd">
             <img src="elliot.jpg" alt="nnnnn" height="150" width="150"/>
             <p>Welcom , {this.state.username} </p> 

            <Card.Content> 
      <Card.Header><strong>{this.state.username}</strong> </Card.Header>
      <Card.Meta>
     <strong>{this.state.username} </strong> Joined in 2015
      </Card.Meta>
      <Card.Description>
       <strong>{this.state.username} </strong>   is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra={true}>
      <a>
        <Icon name='user' />
        <strong>{this.state.username}</strong>22 Friends
      </a>
    </Card.Content>
 </Card>
 
  
            </form>
   )
  }
    return(
      <form onSubmit={this.handleSubmit}  >
        <div  >
          
              <label>Username</label>
              <input className="Username"
                name="username" 
                value={this.state.username} 
                placeholder="Enter youe username" 
                required={true} 
                type="text" 
                onChange={e => this.handleChange(e)} 
              />
          <div >
            <div >
              <label>Password</label>
              <input className="password"
                name="password" 
                value={this.state.password} 
                placeholder="Password" 
                required={true} 
                type="password" 
                onChange={e => this.handleChange(e)} 
               
              />
            </div>
          </div>
          <Button content="Sign in"  type="submit" />


          {/* <button  className="signin">Sign in</button> */}
        </div>

        <p>Please Entert your username and you password</p>
      </form>
      
    );
  }
}