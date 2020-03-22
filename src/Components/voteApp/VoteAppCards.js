import React ,{Component} from "react"
import "./VoteAppCards.css"

class VoteCard extends Component{
    state={
        cards:[
            {
                actionSubstract:"Sub",
                voteNum:0,
                name:"Python",
                actionAdd:"Add"
            },
            {
                actionSubstract:"Sub",
                voteNum:0,
                name:"Javascript",
                actionAdd:"Add"
            },
            {
                
                actionSubstract:"Sub",
                voteNum:0,
                name:"PHP",
                actionAdd:"Add"
            },
            {
                actionSubstract:"Sub",
                voteNum:0,
                name:"Ruby",
                actionAdd:"Add"
            }
        ]
    }
    //function to decreaze votes
    voteHandlingSubstract(id){
        let cardsAfterVoting = [...this.state.cards]
        cardsAfterVoting[id].voteNum--;
		this.setState({cards: cardsAfterVoting});
    }
    //function to increaze votes 
    voteHandlingAdding(id){
        let cardsAfterVoting = [...this.state.cards]
        cardsAfterVoting[id].voteNum++;
		this.setState({cards: cardsAfterVoting});
    }
    render(){
       //looping the state   card== [id]object in cardsArr 
        const Allcards = this.state.cards.map((card,id) =>{
            return <div key={id} className={card.name}>
                <button onClick={this.voteHandlingSubstract.bind(this,id)}>{card.actionSubstract}</button>
                <p>{card.voteNum}</p>
                <p >{card.name}</p>
                <button onClick={this.voteHandlingAdding.bind(this,id)} className={card.id}>{card.actionAdd}</button>
            </div>
           
       })
        return(
            <>
                <div>{Allcards}</div>
            </>
        )
    }
}
export default VoteCard