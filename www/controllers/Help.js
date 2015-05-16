controllers.Help = {
	init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
		view = views.Help,
		navigationBar = views.NavigationBar;

                view.on('touchstart', '.tile-qr .button-right', me.onShowNbHelp);
                view.on('touchstart', '.tile-navbar .button-left', me.onShowQrHelp);
                view.on('touchstart', '.tile-navbar .button-right', me.onShowAbcdHelp);
                view.on('touchstart', '.tile-abcd .button-left', me.onShowNbHelp);
		navigationBar.on('touchstart', '.left-button.back-from-help', me.onBack);
                $("#help-navbar").hide(200);
                $("#help-abcd").hide(200);
	},
	onBack: function() {
		controllers.Common.switchNavigationBar(
			"ZAGREB",
			"left-button close",
			"right-button info",
			"fa fa-times",
			"fa fa-info"
		);

		views.MainMenu.show(200);
		views.Help.hide(200);
                $("#help-navbar").hide(200);
                $("#help-abcd").hide(200);
		$("#help-qr").show(200);
	},
	onShowNbHelp: function() {
                views.Help.hide(200);
		$("#help-qr").hide(200);
                $("#help-abcd").hide(200);
		$("#help-navbar").show(200);
                views.Help.show(200);
	},
	onShowQrHelp: function() {
                views.Help.hide(200);
		$("#help-navbar").hide(200);
                $("#help-abcd").hide(200);
		$("#help-qr").show(200);
                views.Help.show(200);
	},
	onShowAbcdHelp: function() {
                views.Help.hide(200);
		$("#help-qr").hide(200);
		$("#help-navbar").hide(200);
                $("#help-abcd").show(200);
                views.Help.show(200);
	}
};


