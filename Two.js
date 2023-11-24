// function solution(S) {
//     let result = S.split('');

//     for (let i = 0; i < result.length - 1; i++) {
//         if (parseInt(result[i]) + parseInt(result[i + 1]) <= 9) {
//             result.splice(i, 2, (parseInt(result[i]) + parseInt(result[i + 1])).toString());
//             i = Math.max(i - 2, -1);
//         }
//     }

//     return result.join('');
// }

function solution(S) {
    let result = S.split('');

    for (let i = 0; i < result.length - 1; i++) {
        const sum = parseInt(result[i]) + parseInt(result[i + 1]);
        if (sum <= 9) {
            result.splice(i, 2, sum.toString());
            i = Math.max(i - 2, -1);
        }
    }

    return result.join('');
}


const S = "32581";
const S1 = "1119812";
const S2 = "226228";


console.log(solution(S));   // Expected Output: 559
console.log(solution(S1));  // Expected Output: 3992
console.log(solution(S2));  // Expected Output: 4828
