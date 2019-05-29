import React, { Component } from "react";
import { Slide, Image, Title, Subtitle } from "@sambego/diorama";
import Door from "../img/door.jpg";


export default class TalkTitle extends Component {
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

    return (
      <Slide>
        <Image src={Door} full color="" />
        <Title style={titleStyle}>
          Mysteries of Identity City
        </Title>
        <Subtitle style={subtitleStyle}>A "Choose Your Own Adventure" talk about OAuth and JWTs</Subtitle>
      </Slide>
    )
  }
}