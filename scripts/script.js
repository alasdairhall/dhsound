var app = angular.module('myApp', []);

app.controller('projectsCtrl', ['$scope', '$http', function($scope, $http) {
    // $http.get("json/data.json").success(function(response) {
    // 	$scope.projects = response.recentProjects;
    // })
    $scope.projectsLimit = 8;

    $scope.buttonText = "SEE ALL";

    $scope.buttonClicked = function() {
    	// if($scope.projectsLimit == 8) {
    	// 	$scope.projectsLimit = $scope.projects.length;
    	// } else {
    	// 	$scope.projectsLimit = 8;
    	// }

    	// if($scope.buttonText == "SHOW MORE") {
    	// 	$scope.buttonText = "SHOW LESS";
    	// } else {
    	// 	$scope.buttonText = "SHOW MORE";
    	// }
    	document.location.href = "pages/credits.html"
    }

    $scope.projects = [{
		"title": "Happy Valley",
		"img": "happy-valley",
		"description": "Series 2, for Red Production for BBC 1.",
		"url": "http://www.bbc.co.uk/mediacentre/latestnews/2014/happy-valley-series-2"
	}, {
		"title": "Prey",
		"img": "prey",
		"description": "Series 2 of this Red Production for ITV starring Phil Glenister.",
		"url": "http://www.itv.com/presscentre/press-releases/gripping-drama-prey-return-itv-starring-philip-glenister-and-rosie-cavaliero"
	}, {
		"title": "Last Tango in Halifax",
		"img": "last-tango",
		"description": "Series 3 of this Red Production for BBC1.",
		"url": "http://www.redproductioncompany.com/current-shows/last-tango-in-halifax"
	}, {
		"title": "Remember Me",
		"img": "remember-me",
		"description": "A 3 x 60 minute haunting thriller for Mammoth Screen for BBC1 starring Michael Palin, Mark Addy, Jodie Comer and Julia Sawalha. Directed by Ashley Pearce, produced by Chris Carey.",
		"url": "http://www.bbc.co.uk/programmes/b04tcbyb"
	}, {
		"title": "The Cruise",
		"img": "the-cruise",
		"description": "One off comedy with Jane Horrocks and Jason Watkins for EMU Films and Sky Arts. Directed by Stewart Sugg, produced by Mike Elliott.",
		"url": "http://www.sky.com/tv/show/playhouse-presents/video/the-cruise-trailer"
	}, {
		"title": "Car Share",
		"img": "car-share",
		"description": "Completion of second half of filming of this 6 part series set in a car! Starring and directed by Peter Kay this comedy for the BBC is set to be the first to premiere on BBC iPlayer.",
		"url": "http://www.bbc.co.uk/mediacentre/latestnews/2013/car-share.html"
	}, {
		"title": "Shameless",
		"img": "shameless",
		"description": "Series 4-10. Well over 100 episodes for Company Pictures and Channel 4",
		"url": "http://www.channel4.com/entertainment/tv/microsites/S/shameless/index.html"
	}, {
		"title": "The Visit",
		"img": "the-visit",
		"description": "2007 prison based comedy series for BBC Three starring John Henshaw, Iain McKee and Steve Edge.",
		"url": "http://www.bbc.co.uk/comedy/thevisit/"
	}, {
		"title": "The Outsiders",
		"description": "Action drama for ITV.",
		"url": "#"
	}, {
		"title": "Northern Lights",
		"description": "6 part drama series for ITV Granada.",
		"url": ""
	}, {
		"title": "Magnificent 7",
		"description": "90 minute film for BBC.",
		"url": "offlinepages/Mag7.htm"
	}, {
		"title": "Vincent",
		"description": "4 x 90 minute films starring Ray Winstone for Granada/ITV, 2005.",
		"url": "offlinepages/vincent.htm"
	}, {
		"title": "Conviction",
		"description": "6 part drama for Red Production for BBC, 2004.",
		"url": "#"
	}, {
		"title": "Christmas Lights",
		"description": "Single drama for ITV, 2004.",
		"url": "#"
	}, {
		"title": "Mine All Mine",
		"description": "6 part drama for ITV, 2004.",
		"url": "#"
	}, {
		"title": "Indian Dream",
		"description": "Dennis Potter Award Winner. BBC2",
		"url": "#"
	}, {
		"title": "Clocking Off",
		"description": "Series 3. Eight episodes for Red Production for BBC.",
		"url": "#"
	}, {
		"title": "The League of Gentlemen",
		"description": "All 3 series and a Christmas Special (spot my cameo role!) of this BAFTA award winner.",
		"url": "#"
	}, {
		"title": "Linda Green",
		"description": "Red Production for BBC",
		"url": "#"
	}, {
		"title": "Fat Friends",
		"description": "First series. Tiger Aspect/Yorkshire TV/Rollem/ITV, on DAT/Film. Kay Mellor drama. Six one hour episodes. Transmitted Autumn 2000. Producer: Gareth Morgan.",
		"url": "#"
	}, {
		"title": "The Grimleys",
		"description": "Granada TV, transmitted Jan '00, on DAT/Film. Comedy drama, second series first block. Producer: Spencer Campbell.",
		"url": "#"
	}, {
		"title": "Always and Everyone",
		"description": "Granada TV, transmitted September '99, on DAT/Film. Drama series, second block of first series.",
		"url": "#"
	}, {
		"title": "Far from the Madding Crowd",
		"description": "Granada TV, transmitted Summer '98, on DAT/Film. Additional recordist credit. Directed by Nick Renton.",
		"url": "#"
	}, {
		"title": "Ain't Misbehavin'",
		"description": "ITV, transmitted Summer '97, on DAT/Film. Three part comedy thriller directed by Norman Stone.",
		"url": "#"
	}, {
		"title": "Band of Gold",
		"description": "Granada TV, transmitted Winter '97, on DAT/Film. Recordist for a short block of this drama series.",
		"url": "#"
	}];

	$scope.documentaries = [{
		"title": "In Search of Eden",
		"description": "Planet Wild/Discovery",
		"url": "#"
	}, {
		"title": "Louis Theroux meets Jimmy Saville",
		"description": "BBC",
		"url": "#"
	}, {
		"title": "Sex, Lies and Aliens - Cutting Edge",
		"description": "AVP Films/C4",
		"url": "#"
	}, {
		"title": "Family Secrets (part)",
		"description": "Soul Purpose/C4",
		"url": "#"
	}, {
		"title": "Real Lives/Mobile Phones",
		"description": "Fulmar TV/ITV",
		"url": "#"
	}, {
		"title": "The World at Their Feet",
		"description": "Granada/ITV",
		"url": "#"
	}, {
		"title": "Confessions of the Cheshire Wives",
		"description": "BBC",
		"url": "#"
	}, {
		"title": "The Fearless Vampire Hunters",
		"description": "AVP Films/C4",
		"url": "#"
	}, {
		"title": "The Mafia Cookbook",
		"description": "Pierrot Productions/C4",
		"url": "#"
	}, {
		"title": "Children's Hospital & Vets in Practice",
		"description": "BBC",
		"url": "#"
	}];
}]);