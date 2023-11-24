function solution(A) {
    A.sort((a, b) => a - b);

    const n = A.length;
    let left = 1;
    let right = A[n - 1] - A[0] + 1;
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let covered = A[0] + mid;
        let boards = 1;

        for (const hole of A) {
            if (hole > covered) {
                covered = hole + mid;
                boards++;
            }
        }

        if (boards === 2) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}


// function solution(A) {
//     if (A.length === 1) {
//         return 1;
//     }

//     let maxDistance = 0;
//     for (let i = 0; i < A.length - 1; i++) {
//         const distance = A[i + 1] - A[i];
//         if (distance > maxDistance) {
//             maxDistance = distance;
//         }
//     }

//     return maxDistance;
// }

const A = [11, 20, 15];
const A1 = [15, 20, 9, 11];
const A2 = [0, 44, 32, 30, 42, 18, 34, 16, 35];
const A3 = [9];

console.log(solution(A));   // Expected Output: 4
console.log(solution(A1));  // Expected Output: 5
console.log(solution(A2));  // Expected Output: 18
console.log(solution(A3));  // Expected Output: 1
