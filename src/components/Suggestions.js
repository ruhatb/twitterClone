import SuggestedUser from "./SuggestedUser";
import { useState } from "react";

const Suggestions = () => { 
    const [suggestions, setSuggestions ] = useState([
        {name: "Ruhat"}, 
        {name: "Adnan"}
    ]);
    return <div>
        {suggestions.map(user=>(<SuggestedUser user={user} />) )}
    </div>
};

export default Suggestions;