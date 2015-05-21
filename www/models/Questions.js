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
					text: "Jučer je, u 4.e razredu, broj učenika koji su bili na nastavi bio 4 puta veći od broja učenika koji su ostali kod kuće radi gripe. Danas se jedan učenik vratio na nastavu, pa je broj učenika na nastavi bio 5 puta veći od broja odsutnih. Koliko je ukupno učenika u 4.e razredu?",
					correctAnswer: "30"
				}
			},
                        {
				questionType: "C",
				question: {
					text: "Tijekom zadnje runde ScavengerHunt triatlona, Jure je bio četvrti. Marin nije najstariji, ali je stariji od Petra, koji nije završio drugi. Dječak koji je drugi najmlađi, završio je drugi. Dječak koji je završio treći stariji je od dječaka koji je završio prvi. Ivica je mlađi od dječaka koji je završio treći. Odredite poredak dječaka od najmlađeg do najstarijeg.",
					a1: "Jure",
                                        a2: "Marin",
                                        a3: "Petar",
                                        a4: "Ivica",
                                        correctAnswer: "Petar,Ivica,Marin,Jure"
				}
			},
                        {
				questionType: "C",
				question: {
					text: "Na nedavno održanom umjetničkom natjecanju, Ivanino predstavljanje Leonarda nije došlo zadnje. Josipa je izbjegla zadnje mjesto i došla treća. Djevojka koja je nacrtala Moneta bila je vrlo uspješna i osvojila prvo mjesto. Ana je pobijedila djevojku koja je nacrtala Taylorovo djelo dok je djevojka s crtežom Van Gogha pobijedila Veru. Odredite redoslijed umjetničkih djela.",
					a1: "Leonardo",
                                        a2: "Monet",
                                        a3: "Taylor",
                                        a4: "Van Gogh",
                                        correctAnswer: "Monet,Leonardo,Van Gogh,Taylor"
				}
			},
                        {
				questionType: "C",
				question: {
					text: "Na nedavnoj utrci Dezzlup Cup, prva četiri konja rasturila su konkurenciju. Munja nije završio zadnji dok konj obučen u plavo nije bio treći. Strijela je završio ispred konja u zelenom. Raketa je došao prvi. Strijela je završio prije Munje. Hitri je bio obučen u crveno dok Strijela nije bio obučen u žuto. Odredite završni redoslijed konja na utrci.",
					a1: "Munja",
                                        a2: "Strijela",
                                        a3: "Raketa",
                                        a4: "Hitri",
                                        correctAnswer: "Raketa,Strijela,Munja,Hitri"
				}
			}
		];
	},
	getAllQuestions: function() {
		var me = this;
		return me.items;
	}
};
