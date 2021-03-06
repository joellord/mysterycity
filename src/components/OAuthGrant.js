import React, { Component } from "react";
import { Slide, Image, Subtitle } from '@sambego/diorama';

export default class TalkTitle extends Component {
  render() {
    return (
      <Slide nextSlide={this.props.nextSlide}>
        <Subtitle>OAuth - {this.props.flow}</Subtitle>
        <Image src={this.props.image} color="" />
      </Slide>
    )
  }
}