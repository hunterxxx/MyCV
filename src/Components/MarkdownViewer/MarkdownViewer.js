import React from 'react';
import TXT from './txt.md'
import Markdown from 'markdown-to-jsx';

export default class MarkdownViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { md: '' }
    }

    componentDidMount() {
        fetch(TXT)
            .then((res) => res.text())
            .then((md) => {
                this.setState({ md })
            })
    }
    render() {
        //const input = '# This is a header\n\nAnd this is a paragraph'
        //const link = 'https://f000.backblazeb2.com/file/superbucket1/txt.md'

        return (
            <div id='viewer' style={{ margin: '8px' }}>
                <Markdown children={this.state.md} />
            </div>
        )
    }
}