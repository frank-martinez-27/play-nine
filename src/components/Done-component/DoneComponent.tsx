import * as React from 'react';

class DoneComponent extends React.Component<{ doneStatus?: string }, {}> {
    render() {
        return <h1>{this.props.doneStatus}</h1>;
    }
}
export default DoneComponent;