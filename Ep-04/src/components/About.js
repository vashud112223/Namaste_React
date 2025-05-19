import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(" parent Constructor");
  }

  // it is used to make api call - because we want to quickly render the component then make the api call and fill the data
  async componentDidMount() {
    console.log("parent componentdidmount");
    const data = await fetch("https://api.github.com/users/vashud112223");
    const json = await data.json();
    this.setState({
      userinfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  render() {
    console.log("parent render");
    const { name, followers, avatar_url } = this.state.userinfo;
    return (
      <div>
        <h1>About page</h1>
        <h2>This is about Page</h2>
        <h3>Name:{name}</h3>
        <h3>Followers:{followers}</h3>
        <img src={avatar_url}></img>
        {/* <User name={"Ashutosh(function)"} /> */}
        <UserClass name={"Ashutosh(class)"} location={"Lucknow"} />
        <UserClass name={"Aman(class)"} location={"Barabanki"} />
      </div>
    );
  }
}

export default About;

//Mounting
// Constructor (dummy)
// Render (dummy)
// <HTML Dummy>

//   componentDidMount
//   <API Call>
//     <this.setstate> -> State variable is updated

//       ----- updated
//       render(API data)
//       <HTML (new API data)>
//       componentDidUpdate
