export const numberWithCommas = (n) => {
    if(!n) {return null}
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "’");
}
