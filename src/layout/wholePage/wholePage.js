import { Switch , Route } from "react-router-dom";
import Login from "../../pages/Login";
import "./wholePage.css"

const wholePage = () => {
    return ( <div className="wholepage-container">
    <Switch>
        <Route exact path= "/login">
            <Login/>
        </Route>
    </Switch>
    </div> 
    );
};

export default wholePage;