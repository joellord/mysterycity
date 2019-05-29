import React, { Component } from "react";
import { Slide, Image, Title } from "@sambego/diorama";
import ImgWoohoo from "../img/woohoo.gif";

export default class TwitterWoohoo extends Component {
  render() {
    const titleStyleForWoohoo = {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#fff",
      margin: 0
    };

    return (
      <Slide>
        <Image src={ImgWoohoo} full />
        <Title style={titleStyleForWoohoo}>Twitter Notifications</Title>
      </Slide>
    )
  }
}