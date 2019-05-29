import React, { Component } from "react";
import { Slide, Image, Title } from "@sambego/diorama";
import ImgStickers from "../img/ihavestickers.jpg";

export default class Stickers extends Component {
  render() {
    const titleStyleForStickers = {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#fff",
      margin: 0
    };

    return (
      <Slide>
        <Image src={ImgStickers} full />
        <Title style={titleStyleForStickers}>I Have Stickers</Title>
      </Slide>
    )
  }
}