function checkBrackets(str) {
    let leftBrackets = '(',
        rightBrackets = ')',
        leftCount = 0,
        rightCount = 0;

    if (typeof str === "string") {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == leftBrackets) {
                leftCount++;
            } else if (str[i] == rightBrackets) {
                leftCount ? leftCount-- : rightCount++;
            }
        }
        return leftCount + rightCount;
    }
    return -1;
}

/*function checkBrackets(str) {
    let leftBrackets = '(',
        rightBrackets = ')',
        leftCount = 0,
        rightCount = 0;


    for (let i = 0; i < str.length; i++) {
        if (str[i] == leftBrackets) {
            console.log('+');
            leftCount++;
        } else if (str[i] == rightBrackets) {
            rightCount++;
            console.log('-');
        }
    }
    console.log(leftCount);
    console.log(rightCount);
    return (leftCount > rightCount ? leftCount - rightCount : rightCount - leftCount);
}*/