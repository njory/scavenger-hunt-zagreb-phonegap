controllers.Common = {
	init: function() {
		var me = this;
		me.bindCommonEvents();
	},
	bindCommonEvents: function() {
		var me = this;
		views.MessageBox.on('touchstart', '.close', me.onCloseMessageBox);
	},
	onCloseMessageBox: function() {
		var view = views.MessageBox;
		view.hide(200);
	},
	showMessageBox: function(messageHtml, buttonHtml, buttonCls, showClose) {
		var me = this,
			messageBox = views.MessageBox,
			close = messageBox.find(".close").eq(0),
			message = messageBox.find(".message").eq(0),
			button = messageBox.find(".button").eq(0);

		if(showClose) {
			close.show();
		} else {
			close.hide();
		}

		message.html(messageHtml);
		button.html(buttonHtml);
		
		button.removeClass();
		button.addClass(buttonCls);

		messageBox.show(200);
	},
	switchNavigationBar: function(titleVal, leftCls, rightCls, leftIconCls, rightIconCls, hVisibility) {
		var navigationBar = views.NavigationBar,
			title = navigationBar.find(".title").eq(0),
			leftButton = navigationBar.find(".left-button").eq(0),
			rightButton = navigationBar.find(".right-button").eq(0),
			leftIcon = leftButton.find("i").eq(0),
			rightIcon = rightButton.find("i").eq(0);

		title.html(titleVal);
		leftButton.removeClass();
		leftButton.addClass(leftCls);
		rightButton.removeClass();
		rightButton.addClass(rightCls);

		leftIcon.removeClass();
		leftIcon.addClass(leftIconCls);

		rightIcon.removeClass();
		rightIcon.addClass(rightIconCls);
	}
};