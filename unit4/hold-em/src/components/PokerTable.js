import React, { Component } from "react"; 
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';
import PokerHand from './PokerHand';

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards);
        this.state = {
            playersHand: ['deck','deck'],
            dealersHand: ['deck','deck'],
            communityCards: ['deck','deck','deck','deck','deck'],
            wager: 0,
            bankroll: 10000         
        }
        this.prepDeck = this.prepDeck.bind(this);
        this.playerBet = this.playerBet.bind(this);
    }

    // This is a custom method. Not coming from "React"
    // we can't put this in our Deck class, because it's 
    // specific to our Hold Em
    prepDeck(){
        this.cards.createDeck();
        this.cards.shuffleDeck();
        this.cards.deck.shift(); //burn card
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        // deck is now only 47, because we mutated this.deck
        // when we ran shift
        this.setState({
            playersHand: [card1,card3],
            dealersHand: [card2,card4],
        })
    }

    // method to be sent to GameButtons
    // will update player bet
    playerBet(amount){
        const newWager = this.state.wager + amount;
        const newBankRoll = this.state.bankroll - amount;
        this.setState({
            wager: newWager,
            bankroll: newBankRoll
        })
        this.draw();
    }

    // draw will be called when new community card is drawn
    draw(){
        // 
        let communityNewHand = Object.assign([], this.state.communityCards);
        if(communityNewHand[0] === "deck"){
            // first draw needs 3 cards
            communityNewHand = [this.cards.deck.shift(), this.cards.deck.shift(), this.cards.deck.shift()]
        }else{
            // not first, so only pull 1 card
            communityNewHand.push(this.cards.deck.shift());
        }
        this.setState({
            communityCards: communityNewHand
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <div className="col-sm-12 text-center">
                    Current Wager ${this.state.wager}
                    Current Bankroll ${this.state.bankroll}
                </div>
                <PokerHand cards={this.state.dealersHand} />
                <PokerHand cards={this.state.communityCards} />
                <PokerHand cards={this.state.playersHand} />
                <GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet}/>
            </div>
        )
    }
}

export default PokerTable;