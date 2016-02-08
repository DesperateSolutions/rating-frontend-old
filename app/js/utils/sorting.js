class Sort {
    sortBy(varName) {
        return (a,b) => {
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            if (aLower[varName] < bLower[varName]) {
                return -1;
            } else if (aLower[varName] > bLower[varName]) {
                return 1;
            } else {
                return 0;
            }
        };
    }
}

let SortSingleton = new Sort();

export default SortSingleton;
