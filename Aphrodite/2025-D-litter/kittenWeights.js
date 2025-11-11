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

let labelArray = ['20.10.2025 Ilta 00:29 / 00:33 / 00:50 / 01:00', '21.10.2025 Aamu', '21.10.2025 Ilta', '22.10.2025 Aamu', '22.10.2025 Ilta', '23.10.2025 Aamu', '23.10.2025 Ilta', '24.10.2025 Aamu - Pantojen vaihto isompaan', '24.10.2025 Ilta', '25.10.2025 Aamu', '25.10.2025 Ilta', '26.10.2025 Aamu', '26.10.2025 Ilta', '27.10.2025 Aamu - 1 viikko', '27.10.2025 Ilta', '28.10.2025 Aamu', '28.10.2025 Ilta', '29.10.2025 Aamu', '29.10.2025 Ilta', '30.10.2025 Aamu', '30.10.2025 Ilta', '31.10.2025 Aamu - Mustan silmät', '31.10.2025 Ilta', '1.11.2025 Aamu', '1.11.2025 Ilta', '2.11.2025 Aamu - Luomu silmät', '2.11.2025 Ilta', '3.11.2025 Aamu - Vihreä silmät', '3.11.2025 Ilta - 2 viikkoa', '4.11.2025 Aamu', '4.11.2025 Ilta - Punainen silmät', '5.11.2025 Aamu', '5.11.2025 Ilta', '6.11.2025 Aamu', '6.11.2025 Ilta - Punainen kiipesi pesästä ulos', '7.11.2025 Aamu', '7.11.2025 Ilta', '8.11.2025 Aamu', '8.11.2025 Ilta', '9.11.2025 Aamu', '9.11.2025 Ilta', '10.11.2025 Aamu - Pieni pesä pois ison sisältä', '10.11.2025 Ilta', '11.11.2025 Aamu - 3 viikkoa', '11.11.2025 Ilta'];
let nakedWeights = [71, 79, 83, 95, 104, 114, 120, 130, 141, 147, 158, 165, 172, 176, 182, 194, 201, 207, 212, 223, 229, 235, 244, 254, 260, 266, 288, 296, 289, null, 305, 319, 320, 333, 339, 350, 347, 360, 381, 387, 395, 405, 411, 424, 432];
let greenWeights = [77, 77, 90, 101, 111, 123, 132, 138, 155, 164, 172, 180, 189, 191, 197, 207, 212, 223, 223, 231, 238, 248, 260, 269, 276, 284, 294, 302, 308, null, 327, 337, 343, 357, 361, 369, 375, 389, 400, 407, 416, 424, 432, 437, 442];
let redWeights = [78, 92, 96, 100, 110, 119, 128, 135, 149, 151, 162, 171, 179, 183, 189, 198, 203, 201, 212, 215, 223, 232, 240, 245, 253, 255, 265, 273, 284, null, 298, 312, 316, 327, 328, 345, 350, 353, 375, 383, 383, 383, 402, 412, 414];
let blackWeights = [81, 94, 100, 109, 116, 122, 132, 143, 157, 163, 172, 179, 190, 193, 199, 207, 213, 218, 226, 236, 242, 250, 257, 263, 268, 275, 285, 298, 305, null, 323, 334, 338, 351, 359, 371, 371, 375, 389, 401, 422, 409, 414, 428, 425];
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
                    '#ff3352',
                ],
                borderWidth: 6,
                fill: false,
            },
            {
                label: 'Musta',
                data: blackWeights,
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