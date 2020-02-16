import React from 'react';
import './App.css';
import VideoViewer from './Components/VideoViewer/VideoViewer';
import MarkdownViewer from './Components/MarkdownViewer/MarkdownViewer';
import PDFViewer from './Components/PDFViewer/PDFViewer';
import PDFViewer2 from './Components/PDFViewer/PDFViewer2';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      active: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div className="App" >
        <div className="splitscreen">
          <div className="left">
            <button type="button" onClick={this.handleClick}>
              Switch PDF
            </button>
            {this.state.active && <PDFViewer />}
            {!this.state.active && <PDFViewer2 />}
          </div>
          <div className="right">
            <VideoViewer />
            <MarkdownViewer />
          </div>
          <div className="right">

          </div>
        </div >
      </div >
    );
  }
}