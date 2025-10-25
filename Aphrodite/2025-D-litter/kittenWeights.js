/*
Aphroditen painot 22.8.2025 - 18.10.2025

3190g 22.8.2025
3110g 30.8.2025
3300g 8.9.2025
3330g 13.9.2025
3340g 20.9.2025
3750g 27.9.2025
3800g 5.10.2025
4090g 13.10.2025
4250g 18.10.2025

Synnytys: 20.10.2025

22:45 Supistuksia
23:15 Työntöjä + rusehtava neste
23:25 Ponnistus
23:32 Ponnistus
23:35 Ponnistus ja ääni
23:37 Ponnistus
23:39 Ponnistus
23:47 Ponnistus
23:48 Ponnistus
23:49 Läähätys
23:54 Supistus
*/

let labelArray = ['20.10.2025 Ilta 00:29 / 00:33 / 00:50 / 01:00', '21.10.2025 Aamu', '21.10.2025 Ilta', '22.10.2025 Aamu', '22.10.2025 Ilta', '23.10.2025 Aamu', '23.10.2025 Ilta', '24.10.2025 Aamu - Pantojen vaihto isompaan', '24.10.2025 Ilta', '25.10.2025 Aamu'];
let nakedWeights = [71, 79, 83, 95, 104, 114, 120, 130, 141, 147];
let greenWeights = [77, 77, 90, 101, 111, 123, 132, 138, 155, 164]
let redWeights = [78, 92, 96, 100, 110, 119, 128, 135, 149, 151];
let blackWeights = [81, 94, 100, 109, 116, 122, 132, 143, 157, 163];
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
                label: 'Punainen',
                data: redWeights,
                borderColor: [
                    '#ff3352ff',
                ],
                borderWidth: 6,
                fill: false,
            },
            {
                label: 'Musta',
                data: blakcWeights,
                borderColor: [
                    '#383838ff',
                ],
                borderWidth: 6,
                fill: false,
            },
            {
                label: 'Luomu',
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
        spanGaps: true,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});