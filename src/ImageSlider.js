// your ImageSlider code here!
import React from "react";

class imageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return `I am on slide ${this.state.currentSlideIndex}`;
  }
}

export default imageSlider;
