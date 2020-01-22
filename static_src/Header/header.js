import React, {Component} from "react";
import ReactDOM from "react-dom";


export default class Header extends Component {
    render() {
        return (
            <header id="header" className={"d-flex"}>
                <div class={"logo"}>
                    A
                </div>
                <div className={"components"}>{this.props.components}</div>
            </header>
        );
    }
}
