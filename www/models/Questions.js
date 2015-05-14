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
					correctAnswer: "a2"
				}
			},
			{
				questionType: "A",
				question: {
					text: "Question 3",
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
					text: "Question 4",
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
					text: "Quest B1",
					correctAnswer: "1"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Quest B2",
					correctAnswer: "2"
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
