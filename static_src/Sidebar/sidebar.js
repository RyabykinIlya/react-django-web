import React, {Component} from "react";
import ReactDOM from "react-dom";


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userAvatar = document.getElementById("gavatar-url").innerHTML;
        return (
            <aside id="sidebar" className={"d-flex"}>
                {/* можно принимать компоненты через {children} */}
                {/* но как было в задании сказано "атрибут" так и сделал */}
                <div className={"components"}>{this.props.components}</div>
                <div className={"user-avatar d-flex"}>
                    <img src={userAvatar}/>
                </div>
            </aside>
        );
    }
}
