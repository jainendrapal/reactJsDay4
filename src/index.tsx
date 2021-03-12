import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/Hello";
import Description from "./components/Description";
//ReactDOM.render(<App userType='admin' username='h4x0r' />, document.getElementById('example'));

ReactDOM.render(<Description countBy={3}/>, document.getElementById('example'));