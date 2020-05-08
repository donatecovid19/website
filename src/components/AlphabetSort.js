
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

/*
list[Obj] => list[Obj]
*/
const alphabetSort = (los) => {
    return los.sort(compareNames)
}


export default alphabetSort