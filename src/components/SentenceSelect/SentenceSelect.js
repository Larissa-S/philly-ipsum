import React, { Component } from 'react';


class SentenceSelectComponent extends Component {
  render() {
    return (
        <div className="sentence-select-container">
            <div controlId="formControlsSelect">
             <label>Number of Sentences per Paragraph:</label>
             <select componentClass="select" value={this.props.numSentences} onChange={this.props.updateSentences}>
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

export default SentenceSelectComponent;
