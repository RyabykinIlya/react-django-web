import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import Content from "./Content/content";
import Button from "./Button/Button";

class App extends Component {
    render() {
        return (
            <div id={"react-app"}>
                <Header components={
                    <div>
                        <h2>Do everething u want here.</h2>
                    </div>
                }/>
                <Sidebar components={
                    <div>
                        <a href={"/logout"}><Button>Logout</Button></a>
                    </div>
                }/>
                <Content/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
