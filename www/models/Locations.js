models.Locations = {
	items: null,
	init: function() {
		var me = this;
		me.items = [
			{
				address: "Trg bana Josipa Jelačića 11",
				code: "1"
			},
			{
				address: "Glazbeni paviljon, Trg Nikole Šubića Zrinskog",
				code: "2"
			},
			{
				address: "Trg kralja Tomislava 12",
				code: "3"
			},
			{
				address: "Park Bundek",
				code: "4"
			},
			{
				address: "Hrvatsko narodno kazalište u Zagrebu, Trg maršala Tita 15",
				code: "5"
			},
			{
				address: "Savska cesta 206",
				code: "6"
			},
			{
				address: "Trg Svetog Marka 1",
				code: "7"
			},
			{
				address: "Maksimirska cesta 125",
				code: "8"
			},
			{
				address: "Nacionalna i sveučilišna knjižnica, Hrvatske Bratske Zajednice 4",
				code: "9"
			}
		]
	},
	getAllLocations: function() {
		var me = this;
		return me.items;
	}
}