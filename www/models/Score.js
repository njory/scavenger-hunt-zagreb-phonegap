models.Score = {
	items: null,
	key: "Score",
        crScore: null,
	init: function() {
		var me = this;
		me.loadScore();
	},
	loadScore: function() {
		var me = this,
		storage = data.Storage;
		me.items = storage.loadData(me.key);
                me.crScore = storage.loadData("Current");
	},
	checkConstraints: function(index) {
		var me = this,
		items = me.items;

		if(items === null) {
			throw "Trying to access data before it was initialized";
		}

		if(index < 0 || index >= items.length) {
			throw "Index out of array bounds";
		}
	},
	getScore: function() {
		var me = this;
		return me.items;
	},
	setScore: function(data) {
		var me = this;
		me.items = data;
	},
	setCurrentScore: function(score) {
		var me = this;
                me.crScore = score;
	},
	getCurrentScore: function() {
		var me = this;
                return me.crScore;
	},
	getPlayerByIndex: function(index) {
		var me = this,
		items = me.items;
		me.checkConstraints(index);
		return items[index];
	},
	setPlayerByIndex: function(index, data) {
		var me = this,
		items = me.items;
		me.checkConstraints(index);
		items[index] = data;
	},
	syncData: function() {
		var me = this,
		storage = data.Storage;
		storage.saveData(me.key, me.items);
                storage.saveData("Current", me.crScore);
	}
}

