models.Games = {
	items: null,
	key: "Games",
	init: function() {
		var me = this;
		me.loadGames();
	},
	loadGames: function() {
		var me = this,
			storage = data.Storage;

		me.items = storage.loadData(me.key);
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
	getGameByIndex: function(index) {
		var me = this,
			items = me.items;

		me.checkConstraints(index);
		
		return items[index];
	},
	setGameByIndex: function(index, data) {
		var me = this,
			items = me.items;

		me.checkConstraints(index);

		items[index] = data;
	},
	getAllGames: function(data) {
		var me = this;
		return me.items;
	},
	setAllGames: function(data) {
		var me = this;
		me.items = data;
	},
	syncData: function() {
		var me = this,
			storage = data.Storage;

		storage.saveData(me.key, me.items);
	},
	activateNextGame: function(index) {
		var me = this,
			game;

		if(index >= 0 && index < me.items.length) {
			game = me.getGameByIndex(index);
			game.status = "active";
			me.setGameByIndex(index, game);
		}
	}
}