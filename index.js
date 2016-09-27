$(document).ready(function() {

	Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};

	$('#steps').highcharts({
		chart: {
				backgroundColor: 'transparent',
				spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
				type: 'areaspline',
				animation: {
							 duration: 1500,
							 easing: 'easeOutBounce'
					 }
		},
		colors: ['#ff8200','#b0b0b0' ],
		title: {
				text: ''
		},
		legend: {
				enabled: false
		},
		xAxis: {
			labels: {
							enabled: false
					}
		},
		yAxis: {
			title: '',
			labels: {
							enabled: false
					},
					gridLineColor: 'transparent'
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
			backgroundColor: 'transparent',
			spacingBottom: 0,
			spacingTop: 0,
			spacingLeft: 0,
			spacingRight: 0,
			type: 'areaspline',
			animation: {
						 duration: 1500,
						 easing: 'easeOutBounce'
				 }
	},
	colors: ['#ff8200','#b0b0b0' ],
	title: {
			text: ''
	},
	legend: {
			enabled: false
	},
	xAxis: {
		labels: {
						enabled: false
				}
	},
	yAxis: {
		title: '',
		labels: {
						enabled: false
				},
				gridLineColor: 'transparent'
	},
	tooltip: {
			shared: true,
			valueSuffix: 'k steps' // TODO: steps in heartbeat lol
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

	});
