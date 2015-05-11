models.Questions = {
	items: null,
	init: function() {
		var me = this;
		me.items = [
			{
				questionType: "A",
				question: {
					text: "Question 1",
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
					text: "Question 2",
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
			}
		]
	},
	getAllQuestions: function() {
		var me = this;
		return me.items;
	}
}