$(document).ready(function() {

    $('.connect').on('click', function () {
    	$('.side-menu').toggleClass("invisible");

    });

    var elm = document.querySelector('#main-header');
    var ms = new MenuSpy(elm);

    //graph's properties

    $('#steps').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: 'transparent',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            margin: [0, 0, 0, 0]
        },
        colors: ['#ef6c00', '#b0b0b0'],
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickColor: 'transparent',
            gridLineColor: 'transparent',
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: ''
            },
        },
        yAxis: {
            title: '',
            labels: {
                enabled: false
            },
            gridLineColor: 'transparent',
            lineColor: 'transparent'
        },
        tooltip: {
            shared: true,
            valueSuffix: 'k steps'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });

    $('#heart').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: 'transparent',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            margin: [0, 0, 0, 0]
        },
        colors: ['#fa5252'],
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickColor: 'transparent',
            gridLineColor: 'transparent',
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: ''
            },
        },
        yAxis: {
            title: '',
            labels: {
                enabled: false
            },
            gridLineColor: 'transparent',
            lineColor: 'transparent'
        },
        tooltip: {
            shared: true,
            valueSuffix: 'k steps'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });

    $('#sleep').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: 'transparent',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            margin: [0, 0, 0, 0]
        },
        colors: ['#15aabf'],
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickColor: 'transparent',
            gridLineColor: 'transparent',
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: ''
            },
        },
        yAxis: {
            title: '',
            labels: {
                enabled: false
            },
            gridLineColor: 'transparent',
            lineColor: 'transparent'
        },
        tooltip: {
            shared: true,
            valueSuffix: 'k steps'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });

    $('#battery').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: 'transparent',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            margin: [0, 0, 0, 0]

        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            borderColor: 'transparent',
            borderWidth: 0,
            innerSize: '70%',
            data: [
                ['', 70],
                ['', 30]
            ]
        }]
    });

});
