import React from "react"
import "./FullPageApp.css"
import VoteCard from './VoteAppCards';

function FullPage(){
    return(
        <>
             <h1>Vote for your favourite language</h1>
            <div className="AllCards">
                <VoteCard />
            </div>

        </>
    )
}
export default FullPage
