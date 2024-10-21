// 3kyu
function determinant(m) {
    if (m.length == 0) return 0;
    if (m.length == 1) return m[0][0];
    if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    if (m.length > 2) {
        return m.reduce((prev, curr, i, arr) => {
            let miniArr = arr
                .slice(0, i)
                .concat(arr.slice(i + 1))
                .map((item) => item.slice(1));
            return (
                prev + (i % 2 == 0 ? 1 : -1) * curr[0] * determinant(miniArr)
            );
        }, 0);
    }
}
console.log(determinant([[1]]));
console.log(
    determinant([
        [4, 6],
        [3, 8],
    ])
);
console.log(
    determinant([
        [2, 4, 2],
        [3, 1, 1],
        [1, 2, 0],
    ])
);
