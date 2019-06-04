export default (showSearchPage=false, action) => {
    if (action.type === 'SHOW_SEARCH_PAGE') {
        return action.payload;
    }
    return showSearchPage;
}