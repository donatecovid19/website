
/*
Obj, Obj => Number
-1 ==> a < b
0 ==> a == b
1 ==> a > b
*/
const compareNames = (a, b) => {
    const nameA = a.name
    const nameB = b.name 
    if (nameA === nameB) {
        return 0
    }
    return nameA < nameB ? -1 : 1
}

const sorted = (los) => {
    var prev = los[0]
    for (var i = 1; i < los.length; ++i) {
        if (compareNames(prev, los[i]) > 0) {
            return false
        }
        prev = los[i]
    }
    return true
}

/*
list[Obj] => list[Obj]
*/
const alphabetSort = (los) => {
    if (los.length === 0 || sorted(los)) {
        return los
    }
    return los.sort(compareNames)
}


export default alphabetSort