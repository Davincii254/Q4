function solution(A) {
    if (A.length === 1) {
        return 1;
    } else {
        let longest = 2;
        let temp = 2;
        
        for (let i = 2; i < A.length; i++) {
            if (A[i] === A[i - 2]) {
                temp = temp + 1;
            } else {
                temp = 2;
            }
            longest = Math.max(temp, longest);
        }

        return longest;
    }
}

const A = [3,2,3,2,3];
const A1 = [7,4,-2,4,-2,-9];
const A2 = [7,-5,-5,-5,7,-1,7];
const A3 = [4];

console.log(solution(A));   // Expected Output: 5
console.log(solution(A1));  // Expected Output: 4
console.log(solution(A2));  // Expected Output: 3
console.log(solution(A3));  // Expected Output: 1