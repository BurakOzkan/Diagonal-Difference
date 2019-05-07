# Diagonal-Difference

function diagonalDifference(arr)
// gelen matrisin uzunluğunu almak.
    const length = matrix.length;
    let diagonal1 = 0, diagonal2 = 0;

    // Dizi içinde dolaşma ve köşegenleri toplama
    for (let i = 0; i < length; i++) {
        // Calculating the primary diagonal.
        diagonal1 += matrix[i][i];
       // Tersten düşünüp sağdan sola köşegeni toplamak.
        diagonal2 += matrix[length - 1 - i][i]
    }
    // Kesin fark değerini geri döndürme.
    return Math.abs(diagonal1 - diagonal2);  
