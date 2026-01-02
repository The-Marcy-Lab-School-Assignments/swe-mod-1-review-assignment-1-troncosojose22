const uniqueNames = (names) => {
    const uniqueArr = [];
    const resultArr = [];

    for (let i = 0; i < names.length; i++) {
        if (!uniqueArr.includes(names[i].toLowerCase())) {
            uniqueArr.push(names[i].toLowerCase());
            resultArr.push(names[i]);
        }
    }

    return resultArr;
}

