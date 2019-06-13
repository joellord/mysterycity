import React, { Component } from "react";
import { Slide, Title, Text, Subtitle } from "@sambego/diorama";

export default class ThankYou extends Component {
  render() {
    return (
      <Slide>
        <Title>Thank You!</Title>
        <Text>Mystery of Identity City</Text>
        <Text>Beer City Code - Grand Rapids, MI - June 1, 2019</Text>
        <br/>
        <Subtitle><a href="https://ezurl.to/idcity-resources" style={{"textTransform": "none"}}>ezurl.to/idcity-resources</a></Subtitle>
        <Text>Music from https://soundimage.org</Text>
      </Slide>
    )
  }
}