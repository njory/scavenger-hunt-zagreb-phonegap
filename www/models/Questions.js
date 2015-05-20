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
					text: "Koji je broj 5 puta veći od zbroja svojih znamenaka?",
					correctAnswer: "45"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Ove je godine jedan četvrti razred srednje škole pokazao izuzetan interes za strane jezike. Od 30 učenika u razredu samo dvoje nije odabralo dodatni izborni jezik. Od preostalih učenika 14 ih je odabralo talijanski kao dodatni predmet, a 22 španjolski. Može li se iz toga zaključiti koliko je učenika izabralo čak dva jezika kao izborni predmet?",
					correctAnswer: "8"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Gospodin Lovrić kupio je novi alarm za kuću. Šifra ima pet znamenaka, a za slučaj da zaborave šifru, on je svojim ukućanima dao pet tragova: Zbroj petog i trećeg broja je 14, četvrti broj je za jedan veći od drugog, Prvi broj je za jedan manji od drugog pomnoženog s dva, zbroj drugog i trećeg je deset, zbroj svih brojeva je 30.",
					correctAnswer: "74658"
				}
			},
			{
				questionType: "B",
				question: {
					text: "U svakoj velikoj kutiji nalazi se toliko malih kutija koliko ukupno ima velikih kutija. Koliko ima velikih kutija, ako ukupno imamo 870 kutija?",
					correctAnswer: "29"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Netko je upitao stočara na sajmu: - Koliko imate ovaca u svom stadu. On je odgovorio: - Danas sam kupio 40 ovaca i sada ih je tri puta više nego što ih je bilo prije toga. Koliko ovaca ima stočar?",
					correctAnswer: "60"
				}
			},
			{
				questionType: "B",
				question: {
					text: "Dok je mama kupovala ljekove u ljekarni, njezine tri kćeri zabavljale su se vagajući se zajedno na medicinskoj vagi. Naposljetku su sve zajedno stale na vagu. Koliko kilograma imaju sve tri zajedno ako su rezultati njihova vaganja bili ovakvi: Ana i Dora zajedno imaju 18kg, Tea i Ana imaju zajedno 21kg, Tea i Dora imaju zajedno 25kg.",
					correctAnswer: "32"
				}
			},
                        {
				questionType: "C",
				question: {
					text: "During the latest round of the ScavengerHunt triathlon, Keith was fourth. Adrian is not the oldest, but is older than Duncan, who was not second. The child who was next in age to the youngest, finished second. The child who finished in third place is older than the child who finished first. Billy is younger than the child who finished in third place. Can you determine who finished where and place the children in order of age?",
					a1: "Keith",
                    a2: "Adrian",
                    a3: "Duncan",
                    a4: "Billy",
					correctAnswer: "Duncan,Billy,Adrian,Keith"
				}
			}
		];
	},
	getAllQuestions: function() {
		var me = this;
		return me.items;
	}
};
