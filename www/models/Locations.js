models.Locations = {
	items: null,
	init: function() {
		var me = this;
		me.items = [
			{
				address: "Lokacija 1",
				code: "1"
			},
			{
				address: "Lokacija 2",
				code: "2"
			},
			{
				address: "Lokacija 3",
				code: "3"
			},
			{
				address: "Lokacija 4",
				code: "4"
			},
			{
				address: "Lokacija 5",
				code: "5"
			},
			{
				address: "Lokacija 6",
				code: "6"
			},
			{
				address: "Lokacija 7",
				code: "7"
			},
			{
				address: "Lokacija 8",
				code: "8"
			},
			{
				address: "Lokacija 9",
				code: "9"
			}
		]
	},
	getAllLocations: function() {
		var me = this;
		return me.items;
	}
}