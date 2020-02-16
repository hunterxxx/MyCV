import React from 'react';
import './App.css';
import PDFViewer from './Components/PDFViewer/PDFViewer';
import VideoViewer from './Components/VideoViewer/VideoViewer';
import MarkdownViewer from './Components/MarkdownViewer/MarkdownViewer';

function App() {
  return (
    <div className="App">
      <div className="splitscreen">
        <div className="left">
          <PDFViewer />
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

export default App;
