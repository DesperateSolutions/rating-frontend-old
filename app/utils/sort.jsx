function sortList(varName) {
  return (a, b) => {
    const aValue = a[varName];
    const bValue = b[varName];
    if (aValue < bValue) {
      return 1;
    } else if (aValue > bValue) {
      return -1;
    }
    return 0;
  };
}

export default sortList;
