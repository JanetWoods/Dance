const sortIt = function(propertyToSortOn){
    return function (x, y) {
        return((x[propertyToSortOn]===y[propertyToSortOn]) ? 0 :
        ((x[propertyToSortOn] > y[propertyToSortOn]) ? 1 : -1))
    }
}

export default sortIt