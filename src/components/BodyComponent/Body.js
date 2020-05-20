import React, {Component} from "react";


class Body extends Component {
    render() {
        return (
            <div>
                <p>Hello world</p>
                {this.props.userData.map(user => <div>{user.id} </div>)}
            </div>
        )
    }
}


export default Body