import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>  
                Hello World! {this.props.name}
            </div>
        );
    }
}

export default App;