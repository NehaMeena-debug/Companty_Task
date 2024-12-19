function maximumPathSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;


    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));

   
    for (let j = 0; j < cols; j++) {
        dp[0][j] = matrix[0][j];
    }

   
    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const up = dp[i - 1][j];
            const leftDiagonal = j > 0 ? dp[i - 1][j - 1] : 0;
            const rightDiagonal = j < cols - 1 ? dp[i - 1][j + 1] : 0;

            dp[i][j] = matrix[i][j] + Math.max(up, leftDiagonal, rightDiagonal);
        }
    }

   
    return Math.max(...dp[rows - 1]);
}


const matrix = [
    [2, 3, 1],
    [6, 5, 4],
    [7, 8, 9]
];
console.log(maximumPathSum(matrix)); 
