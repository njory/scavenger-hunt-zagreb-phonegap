controllers.Score = {
	init: function() {
		var me = this;
		me.bindEvents();
	},
	bindEvents: function() {
		var me = this,
		view = views.Score,
		navigationBar = views.NavigationBar;
        
		navigationBar.on('touchstart', '.left-button.back-from-score', me.onBack);
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
		views.Score.hide(200);
	},
	setScoreBoard: function() {
		var scoreView = views.Score,
			e1n = scoreView.find(".entry.first .name").eq(0),
			e2n = scoreView.find(".entry.second .name").eq(0),
			e3n = scoreView.find(".entry.third .name").eq(0),
			e4n = scoreView.find(".entry.fourth .name").eq(0),
			e5n = scoreView.find(".entry.fifth .name").eq(0),
                        e1s = scoreView.find(".entry.first .score").eq(0),
			e2s = scoreView.find(".entry.second .score").eq(0),
			e3s = scoreView.find(".entry.third .score").eq(0),
			e4s = scoreView.find(".entry.fourth .score").eq(0),
			e5s = scoreView.find(".entry.fifth .score").eq(0);

                        if(models.Score.getScore()){
                            var scores = models.Score.getScore();
                            e1n.html(scores[0].name);
                            e1s.html(scores[0].score);
                            
                            if(scores.length > 1){
                                e2n.html(scores[1].name);
                                e2s.html(scores[1].score);
                            }

                            if(scores.length > 2){
                                e3n.html(scores[2].name);
                                e3s.html(scores[2].score);
                            }

                            if(scores.length > 3){
                                e4n.html(scores[3].name);
                                e4s.html(scores[3].score);
                            }
                        
                            if(scores.length > 4){
                                e5n.html(scores[4].name);
                                e5s.html(scores[4].score);
                            }
                        }

	},
	updateScoreBoard: function(cname) {
                
		var cscore = models.Score.getCurrentScore();
                if(models.Score.getScore()){
                    var scores = models.Score.getScore();
                    for(var i = 0; i < scores.length; i++) {
                        if(cscore > scores[i].score) {
                            break;
                        }
                    }
                    var newScores = Array(scores.length);
                    for(var j = 0; j < i; j++){
                        newScores[j] = {
                            name: scores[j].name,
                            score: scores[j].score
                        };
                    }
                    newScores[j] = {
                        name: cname,
                        score: cscore
                    };
                    for(var j; j < scores.length; j++){
                        newScores[j+1] = {
                            name: scores[j].name,
                            score: scores[j].score
                        };
                    }
                    models.Score.setScore(newScores);
                } else if (cscore) {
                    var newScores = Array(1);
                    newScores[0] = {
                        name: cname,
                        score: cscore
                    };
                    models.Score.setScore(newScores);
                }
                models.Score.syncData();
	}
};

