import { shuffle } from 'underscore'

/**
 * Creates a new deck
 * @param {string[]} cardTypes 
 * @param {string[]} specialTypes 
 * @returns {string[]} A new deck of cards
 */
export const crearDeck = (cardTypes, specialTypes) => {

    if(!cardTypes || cardTypes.length === 0) throw new Error('cardTypes is required')
    if(!specialTypes || specialTypes.length === 0) throw new Error('specialTypes is required')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cardTypes ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cardTypes ) {
        for( let esp of specialTypes ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = shuffle( deck );
    console.log( deck );
    return deck;
}