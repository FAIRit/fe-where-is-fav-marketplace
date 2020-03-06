import React from "react";
import Trojmiasto from "./Trojmiasto";
import Warszawa from "./Warszawa";

function Start_Choose() {
    return (
        // warunkowe renederowanie
        <>
            <Trojmiasto/>
            <Warszawa/>
        </>

    );
}

export default Start_Choose