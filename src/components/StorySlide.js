import React, { Component } from "react";
import { Slide, Image, Text } from "@sambego/diorama";

import ImgForest from "../img/forest.jpg";
import ImgPathVillage from "../img/pathvillage.jpg";
import ImgTroll from "../img/troll.jpg";
import ImgTroll2 from "../img/troll2.jpg";
import ImgWizardTower from "../img/wizardtower.jpg";
import ImgWizard from "../img/wizard.jpg";
import ImgScroll from "../img/scroll.jpg";
import ImgVillage from "../img/village.jpg";
import ImgMayor from "../img/mayor.jpg";
import ImgEnchantressCastle from "../img/enchantresscastle.jpg";
import ImgEnchantress from "../img/enchantress.jpg";
import ImgPigeon from "../img/pigeon.jpg";
import ImgMayor2 from "../img/mayor2.jpg";
import ImgFireworks from "../img/fireworks.jpg";

export default class StorySlide extends Component {
  render() {
    const textStyle = {
      position: "absolute",
      color: "white",
      fontWeight: "bold",
      bottom: "3vw",
      background: "#00000099",
      padding: "1vw"
    };

    let img = ImgForest;

    switch(this.props.image) {
      case "forest":
        img = ImgForest;
        break;
      case "pathvillage":
        img = ImgPathVillage;
        break;
      case "troll":
        img = ImgTroll;
        break;
      case "troll2":
        img = ImgTroll2;
        break;
      case "wizardtower":
        img = ImgWizardTower;
        break;
      case "wizard":
        img = ImgWizard;
        break;
      case "scroll":
        img = ImgScroll;
        break;
      case "village":
        img = ImgVillage;
        break;
      case "mayor":
        img = ImgMayor;
        break;
      case "enchantresscastle":
        img = ImgEnchantressCastle;
        break;
      case "enchantress":
        img = ImgEnchantress;
        break;
      case "pigeon":
        img = ImgPigeon;
        break;
      case "mayor2":
        img = ImgMayor2;
        break;
      case "fireworks":
        img = ImgFireworks;
        break;
      default:
        img = ImgForest;
    }

    return (
      <Slide>
        <Image src={img} full/>
        <Text style={textStyle}>{this.props.text}</Text>
      </Slide>
    )
  }
}