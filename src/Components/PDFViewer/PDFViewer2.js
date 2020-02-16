import React from 'react';

export default class PDFViewer extends React.Component {
    render() {
        return (
            <div id='viewer' style={{ width: '100%', height: '100%' }}>
                <iframe title="cv" width="100%" height="100%" src="A17_FlightPlan.pdf" />
            </div>
        )
    }
}