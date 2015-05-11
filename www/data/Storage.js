data.Storage = {
	loadData: function(key) {
		var data = localStorage.getItem(key);

		try {
			data = JSON.parse(data);
		}
		catch (err) {
			throw ("Cannot parse data from local storage with key " + key);
		}

		return data;
	},

	saveData: function(key, data) {
		try {
			var jsonData = JSON.stringify(data);
			localStorage.setItem(key, jsonData);
		}
		catch (err) {
			throw ("Cannot save data to local storage with key " + key);
		}
	}
}