import React, { Component } from 'react';


class GeneratorComponent extends Component {
  render() {
    return (
        <div className="generator-container">
            <div id="lorem-container" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
        </div>
    );
  }
}

export default GeneratorComponent;
