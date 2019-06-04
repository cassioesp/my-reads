export default (term ='', action) => {
    if (action.type === 'SEARCH_TERM') {
        return action.payload;
    }
    return term;
}