export const selectAllCard = (state) => state.cards;

export const selectVisibleCards = (state, filers= []) => {
    if (filers.length ===0) return state.cards;

    return state.cards.filers (card => {
        const cardFilters = [].concat(card.role, card.level, ...card.languages, ...card.tools);
        return filers.every(filer => cardFilters.includes(filer))
    })
}