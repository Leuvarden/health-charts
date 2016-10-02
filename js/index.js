$(document).ready(function() {

	//page animation

	var zTop = 1;
	$('a').on('click',function(e){
 		e.preventDefault();
 		// Animate up or down based on DOM index
 		var index = $($(this).attr('href')).index();
 		var wh = $(window).height();
 		$('section').each(function(){
 			var $tgt = $(this);
 			var idx = $tgt.index();
 			$tgt.removeClass();
 			if (index == idx) {
				$tgt.stop(true,true).animate({top:0},'linear').addClass('active').css({'z-index':zTop});
			}
 			if (index < idx) {
	 			$tgt.stop(true,true).animate({top:wh},'linear').addClass('below');
 			}
 			if(index > idx ){
	 		$tgt.stop(true,true).animate({top:-wh},'linear').addClass('above');
 			}
 		});
 	zTop++;
	})

	$('a[href="#a"]').trigger('click');

	$(window).on('resize',function(){
 	var wh = $(window).height();
 	$('article, section').height(wh);
 	$('.active').css({top:0});
 	$('.above').css({top:-wh});
 	$('.below').css({top:wh});
	}).trigger('resize');

	//graph's properties

	$('#steps').highcharts({
		chart: {
			type: 'areaspline',
				backgroundColor: 'transparent',
				spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0
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
					},
					tickColor: 'transparent',
					gridLineColor: 'transparent'
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
            type: 'column',
						backgroundColor: 'transparent',
						spacingBottom: 0,
		        spacingTop: 0,
		        spacingLeft: 0,
		        spacingRight: 0
        },
        title: {
            text: ''
        },
        xAxis: {
            labels: {
							enabled: false
					},
					tickColor: 'transparent',
					gridLineColor: 'transparent',
					lineColor: 'transparent'
        },
        yAxis: {
            labels: {
							enabled: false
					},
					gridLineColor: 'transparent',
					title: ''
		},
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
				credits: {
						enabled: false
				},
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'John',
            data: [5]
        }, {
            name: 'Jane',
            data: [5]
        }]
    });



	});
