import React, {Component} from "react";
import Footer from "../FooterComponent/Footer";
import Header from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import API from "../../API";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    };


    filterNames = (NamesList) => {
        return NamesList.sort((a, b) => a.username.localeCompare(b.username));
    }

    componentDidMount() {
        API.get('/users').then(response => this.setState({
            users: this.filterNames(response.data),
        })).catch(error => console.log(error))
    }

    pushToArray = name => {
        console.log(name)
        this.setState(state => {
            const users = state.users.concat({username: name});
            return {
                users,
            }
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Body
                    onChange={e => this.pushToArray(e)}
                    userData={this.state.users}/>
                <Footer/>
            </div>
        )
    }


}

export default Main