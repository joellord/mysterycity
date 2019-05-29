import React, { Component } from "react";
import { Slide, Title, Code } from "@sambego/diorama";
import global from "../utils/global";

export default class CodeSlide extends Component {
  constructor(props) {
    super(props);
    this.state = global.getAll();
  }
  render() {
    const code = this.props.children;

    return (
      <Slide>
        {this.props.title &&
          <Title>{this.props.title}</Title>
        }
        <Code code={code} />
      </Slide>
    )
  }
}