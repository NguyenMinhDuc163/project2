'use strict';

// eslint-disable-next-line no-unused-vars
function MakeMultiFilter(originalArray) {
    var currentArray = originalArray;
    function arrayFilter (filterCriteria, callback) {
        if (typeof filterCriteria !== "function") {
            return currentArray;
        }

        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === "function") {
            callback.call(originalArray, currentArray);
        }
        return arrayFilter;
    }
    return arrayFilter;
}