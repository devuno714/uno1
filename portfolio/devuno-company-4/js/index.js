
// google.charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Days', '판매', '지출'],
    ['2018.02.22',  1000,      400],
    ['2018.02.23',  1170,      460],
    ['2018.02.24',  660,       1120],
    ['2018.02.25',  1030,      540]
    ]);

    var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}