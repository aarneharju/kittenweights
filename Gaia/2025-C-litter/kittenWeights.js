let labelArray = ['22.3.2025 Aamu', '22.3.2025 Ilta', '23.3.2025 Aamu', '23.3.2025 Ilta', '24.3.2025 Aamu', '24.3.2025 Ilta', '25.3.2025 Aamu - pantojen vaihto', '25.3.2025 Ilta', '26.3.2025 Aamu', '26.3.2025 Ilta', '27.3.2025 Aamu', '27.3.2025 Ilta', '28.3.2025 Aamu', '28.3.2025 Ilta', '29.3.2025 Aamu - Naku silmät alkaa aueta', '29.3.2025 Ilta', '30.3.2025 Aamu - Pinkki silmät alkaa aueta', '30.3.2025 Ilta', '31.3.2025 Aamu', '31.3.2025 Ilta', '1.4.2025 Aamu', '1.4.2025 Ilta', '2.4.2025 Aamu - Vihreä silmät alkaa aueta', '2.4.2025 Ilta', '3.4.2025 Aamu', '3.4.2025 Ilta', '4.4.2025 Aamu', '4.4.2025 Ilta', '5.4.2025 Aamu'];
let greenWeights = [104, 116, 122, 131, 138, 147, 157, 167, 179, 193, 201, 208, 210, 222, 233, 234, 240, 246, 252, 261, 268, 269, 274, 284, 289, 297, 307, 316, 332];
let pinkWeights = [77, 87, 90, 98, 105, 120, 127, 137, 144, 154, 160, 170, 176, 179, 189, 192, 199, 201, 207, 217, 220, 226, 231, 238, 244, 252, 258, 265, 276];
let nakedWeights = [82, 94, 100, 103, 116, 125, 130, 141, 147, 163, 168, 178, 185, 186, 203, 205, 215, 221, 233, 239, 245, 251, 260, 266, 272, 280, 288, 300, 311];
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelArray,
        datasets: [
            {
                label: 'Vihreä',
                data: greenWeights,
                borderColor: [
                    '#69db7c',
                ],
                borderWidth: 6,
                fill: false,
            },
            {
                label: 'Pinkki',
                data: pinkWeights,
                borderColor: [
                    '#ffb6c1',
                ],
                borderWidth: 6,
                fill: false,
            },
            {
                label: 'Naku',
                data: nakedWeights,
                borderColor: [
                    '#4dabf7',
                ],
                borderWidth: 6,
                fill: false,
            },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});