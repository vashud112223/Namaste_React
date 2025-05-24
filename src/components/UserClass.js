
import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      count2:2,
    };
    console.log(this.props.name+"child constructor ")
  }

  componentDidMount(prevProps,prevState){
    this.timer = setInterval(()=>{
      console.log("Namsate React")
    },1000)
    // this.state.count!= prevState.count
    // console.log(this.props.name+"child componentdidmount")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    console.log(this.props.name+"child render")
    const {name,location} = this.props;
    return (
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}>CountIncrease</button>
        <h1>Count:{this.state.count2}</h1>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass