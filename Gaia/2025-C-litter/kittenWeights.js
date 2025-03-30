let labelArray = ['22.3.2025 Aamu', '22.3.2025 Ilta', '23.3.2025 Aamu', '23.3.2025 Ilta', '24.3.2025 Aamu', '24.3.2025 Ilta', '25.3.2025 Aamu - pantojen vaihto', '25.3.2025 Ilta', '26.3.2025 Aamu', '26.3.2025 Ilta', '27.3.2025 Aamu', '27.3.2025 Ilta', '28.3.2025 Aamu', '28.3.2025 Ilta', '29.3.2025 Aamu - Naku silmät alkaa aueta', '29.3.2025 Ilta', '30.3.2025 Aamu - Pinkki silmät alkaa aueta', '30.3.2025 Ilta'];
let greenWeights = [104, 116, 122, 131, 138, 147, 157, 167, 179, 193, 201, 208, 210, 222, 233, 234, 240, 246];
let pinkWeights = [77, 87, 90, 98, 105, 120, 127, 137, 144, 154, 160, 170, 176, 179, 189, 192, 199, 201];
let nakedWeights = [82, 94, 100, 103, 116, 125, 130, 141, 147, 163, 168, 178, 185, 186, 203, 205, 215, 221];
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