import React, { Component } from "react";
import { Slide, Image, Title, Subtitle } from "@sambego/diorama";
import slide from "../utils/SlideState";
import global from "../utils/global";
import Door from "../img/door.jpg";


export default class TalkTitle extends Component {
  constructor(props) {
    super(props);

    this.startPresentation = this.startPresentation.bind(this);
  }

  startPresentation() {
    global.setGlobalProp("startTs", (new Date()).getTime());
    slide.gotoSlide(1);
  }

  render() {
    const titleStyle = {
      position: "absolute",
      left: "50%",
      top: "40%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#fff",
      margin: 0
    };
    const subtitleStyle = {
      position: "absolute",
      left: "50%",
      top: "60%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#fff",
      margin: 0,
      fontSize: "2vw"
    };
    const buttonStyle = {
      position: "absolute",
      bottom: "2vw",
      right: "2vw",
      opacity: "0.3"
    };

    return (
      <Slide>
        <Image src={Door} full color="" />
        <Title style={titleStyle}>
          Mysteries of Identity City
        </Title>
        <Subtitle style={subtitleStyle}>A "Choose Your Own Adventure" talk about OAuth and JWTs</Subtitle>
        <button style={buttonStyle} onClick={()=>this.startPresentation()}>Start</button>
      </Slide>
    )
  }
}