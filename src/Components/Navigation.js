import React from "react";
import { Route, Switch } from "react-router-dom";
import PDFViewer from './Components/PDFViewer/PDFViewer';
import PDFViewer2 from './Components/PDFViewer/PDFViewer2';

export default function Navigation() {
    return (
        <Switch>
            <Route exact path="/" component={PDFViewer} />
            <Route exact path="/refletter" component={PDFViewer2} />
        </Switch>
    );
}
