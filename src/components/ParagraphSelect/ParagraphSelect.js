import React, { Component } from 'react';


class ParagraphSelectComponent extends Component {
  render() {
    return (
        <div className="paragraph-select-container">
            <div controlId="formControlsSelect">
             <label>Number of Paragraphs:</label>
             <select componentClass="select"value={this.props.numParagraphs}  onChange={this.props.updateParagraphs}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
             </select>
            </div>
        </div>

    );
  }
}

export default ParagraphSelectComponent;
