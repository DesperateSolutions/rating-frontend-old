class Sort {
    sortBy(varName) {
        return (a,b) => {
            const aValue = a[varName];
            const bValue = b[varName];
            if (aValue < bValue) {
                return 1;
            } else if (aValue > bValue) {
                return -1;
            } else {
                return 0;
            }
        };
    }
}

let SortSingleton = new Sort();

export default SortSingleton;
