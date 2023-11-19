import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Feed from "../../pages/Feed";




const Main = () => {
    return (
    <Switch>
        <Route exact path="/feed">
            <Feed />
        </Route>

</Switch>
    );
};
export default Main;