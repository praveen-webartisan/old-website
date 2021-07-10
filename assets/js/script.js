(function ($) {
	var gitHubStatsAPIURL;

	function changeColorMode(colorMode, store = true) {
		var gitHubStatsTheme = 'default';

		if(colorMode == 'dark') {
			$('#btnToggleColorMode .icofont-sun').removeClass('hide');
			$('#btnToggleColorMode .icofont-night').addClass('hide');

			$('body').addClass('dark');
			gitHubStatsTheme = 'react';
		} else {
			$('#btnToggleColorMode .icofont-night').removeClass('hide');
			$('#btnToggleColorMode .icofont-sun').addClass('hide');

			$('body').removeClass('dark');
		}

		$('#githubStats').attr('src', gitHubStatsAPIURL + '&theme=' + gitHubStatsTheme)

		if(store) {
			localStorage.setItem('colorMode', colorMode);
		}
	}

	$(document).on('click', '#btnToggleColorMode', function () {
		var colorMode = 'default';

		if($('body').hasClass('dark')) {
			colorMode = 'default';
		} else {
			colorMode = 'dark';
		}

		changeColorMode(colorMode);
	});

	$(document).ready(function () {
		var colorMode = localStorage.getItem('colorMode');
		gitHubStatsAPIURL = $('#githubStats').attr('data-src');

		if(window.matchMedia) {
			// Listen to System Color Mode change
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
				changeColorMode(e.matches ? 'dark' : 'default', false);
			});

			// Check if Color Mode is not set previously and System Color Mode is set to Dark
			if(!colorMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				colorMode = 'dark';
			}
		}

		// Check if Color Mode is not set previously
		if(!colorMode) {
			// Automatically set Dark Color Mode on Evening when Color Mode is not selected
			var now = new Date();
			var hours = now.getHours();

			if(hours < 7 || hours > 18) {
				colorMode = 'dark';
			}
		}

		changeColorMode(colorMode, false);
	});
}) (jQuery);