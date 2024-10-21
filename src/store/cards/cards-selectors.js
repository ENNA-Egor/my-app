export const selectAllCard = (state) => state.cards;

export const selectVisibleCards = (state, filters= []) => {
    if (filters.length ===0) return state.cards;

    return state.cards.filter (card => {
        const cardFilters = [].concat(card.role, card.level, ...card.languages, ...card.tools);
        return filters.every(filter => cardFilters.includes(filter))
    })
}