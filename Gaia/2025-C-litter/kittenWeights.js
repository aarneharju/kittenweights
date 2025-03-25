let labelArray = ['22.3.2025 Aamu', '22.3.2025 Ilta', '23.3.2025 Aamu', '23.3.2025 Ilta', '24.3.2025 Aamu', '24.3.2025 Ilta', '25.3.2025 Aamu - pantojen vaihto', '25.3.2025 Ilta'];
let greenWeights = [104, 116, 122, 131, 138, 147, 157, 167];
let pinkWeights = [77, 87, 90, 98, 105, 120, 127, 137];
let nakedWeights = [82, 94, 100, 103, 116, 125, 130, 141];
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