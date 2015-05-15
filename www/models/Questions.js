models.Questions = {
	items: null,
	init: function() {
		var me = this;
		me.items = [
			{
				questionType: "A",
				question: {
					text: "Marko i Danijel su krenuli na put. Marko je vozio prvih 90 km a Danijel ostatak puta. Na povratku je Marko prvi vozio, a Danijel preuzeo posljednjih 100 km. Tko je vozio više?",
					a1: "Danijel",
					a2: "Marko",
					a3: "Jednako",
					a4: "Nema dovoljno informacija",
					correctAnswer: "a1"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Imamo tri označene kutije, ali svaka kutija je krivo označena. U kutijama se nalaze: jabuke, banane, te jabuke i banane. Iz kutije sa kojom oznakom možemo izvući jedno voće kako bi ih znali pravilno označiti?",
					a1: "Jabuke",
					a2: "Banane",
					a3: "Jabuke i banane",
					a4: "Nije moguće odrediti",
					correctAnswer: "a3"
				}
			},
			{
				questionType: "A",
				question: {
					text: "U šumi zaborava lav laže svakog ponedeljka, utorka i srijede, a jednorog laže četvrtkom, petkom i subotom. Lav: Jučer sam lagao. Jednorog: I ja sam. Kada su ovo izjavili?",
					a1: "U srijedu",
					a2: "U nedelju",
					a3: "U četvrtak",
					a4: "U subotu",
					correctAnswer: "a3"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Pokvareni sat gubi 24 minute svakog sata. Sada pokazuje 03:00 h, a znamo da je bio točan u ponoć. Ako je sat prestao raditi prije jedan sat, koliko je sada sati?",
					a1: "05:35 h",
					a2: "05:25 h",
					a3: "05:00 h",
					a4: "06:00 h",
					correctAnswer: "a4"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Question 5",
					a1: "Answer 1",
					a2: "Answer 2",
					a3: "Answer 3",
					a4: "Answer 4",
					correctAnswer: "a1"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Question 6",
					a1: "Answer 1",
					a2: "Answer 2",
					a3: "Answer 3",
					a4: "Answer 4",
					correctAnswer: "a2"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Question 7",
					a1: "Answer 1",
					a2: "Answer 2",
					a3: "Answer 3",
					a4: "Answer 4",
					correctAnswer: "a3"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Question 8",
					a1: "Answer 1",
					a2: "Answer 2",
					a3: "Answer 3",
					a4: "Answer 4",
					correctAnswer: "a4"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Question 9",
					a1: "Answer 1",
					a2: "Answer 2",
					a3: "Answer 3",
					a4: "Answer 4",
					correctAnswer: "a1"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Maja i Emil imaju nekoliko jabuka. Ako Emil da Maji jabuku oboje će imati jednak broj jabuka. Ako Maja da Emilu jabuku, on će imati duplo više jabuka od nje. Koliko jabuka ima Emil?",
					correctAnswer: "7"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Ana je u laboratoriju napravila smjesu koja je teska 20 kg i sadrži 90% vode. Idući dan je smjesa imala 50% vode. Koliko je kg smjesa sada teška ako dio smjese koji ne sadrži vodu nije promijenjen?",
					correctAnswer: "12"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B3",
					correctAnswer: "3"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B4",
					correctAnswer: "4"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B5",
					correctAnswer: "5"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B6",
					correctAnswer: "6"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B7",
					correctAnswer: "7"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B8",
					correctAnswer: "8"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B9",
					correctAnswer: "9"
				}
			}
		]
	},
	getAllQuestions: function() {
		var me = this;
		return me.items;
	}
}
