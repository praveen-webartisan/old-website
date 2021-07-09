(function ($) {
	var gitHubStatsAPIURL;

	function changeTheme(theme) {
		var gitHubStatsTheme = 'default';

		if(theme == 'dark') {
			$('body').addClass('dark');
			gitHubStatsTheme = 'react';
		} else {
			$('body').removeClass('dark');
		}

		$('#githubStats').attr('src', gitHubStatsAPIURL + '&theme=' + gitHubStatsTheme)

		localStorage.setItem('theme', theme);
	}

	$(document).on('click', '#btnToggleTheme', function () {
		var theme = 'default';

		if($('body').hasClass('dark')) {
			theme = 'default';
		} else {
			theme = 'dark';
		}

		changeTheme(theme);
	});

	$(document).ready(function () {
		var theme = localStorage.getItem('theme');
		gitHubStatsAPIURL = $('#githubStats').attr('data-src');

		changeTheme(theme);
	});
}) (jQuery);