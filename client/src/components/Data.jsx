import React from "react";
import axios from "axios";

import Player from "./Player";

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.data.map(player => {
          return <Player player={player} />;
        })}
      </div>
    );
  }
}

export default Data;
