Highcharts.chart('negativecontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Angelica’s Column chart with negative values'
    },
    xAxis: {
        categories: ['Blueberries', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Angelica',
        data: [8, 3, -3, 7, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});