function sortMerge(array) {
    if(array.length <= 1) return array;

    const midPoint = Math.floor(array.length / 2);
    const leftPart = sortMerge(array.slice(0, midPoint));
    const rightPart = sortMerge(array.slice(midPoint));
    return merge(leftPart, rightPart);
}

function merge(leftPart, rightPart) {
    const mergedItems = [];

    while(leftPart.length > 0 && rightPart.length > 0) {
        const smallerArr = leftPart[0] < rightPart[0] ? leftPart : rightPart;
        const smallerItem = smallerArr.shift();
        mergedItems.push(smallerItem);
    }

    return mergedItems.concat(leftPart, rightPart);
}

console.log(sortMerge([5, 1, 10, 8, -3, 9, 5, 2, 11]));