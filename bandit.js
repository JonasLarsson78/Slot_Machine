let flexItem = document.querySelector("#item");
let outputResult = document.querySelector("#result");
let outputCredits = document.querySelector("#credits");
let lastCheckout = document.querySelector("#lastCheckout");
let jackpot = document.querySelector("#jackpot");


let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let line4 = document.querySelector("#line4");

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let credits = 0;
let counter = 0;

let s = "<img src='slot_pic/s.jpg' class='slotImg'>";
let p = "<img src='slot_pic/p.jpg' class='slotImg'>";
let e = "<img src='slot_pic/e.jpg' class='slotImg'>";
let l = "<img src='slot_pic/l.jpg' class='slotImg'>";

let jackpotPic = "<img name='jackpot' src='slot_pic/jackpot.png'>";
jackpot.innerHTML = jackpotPic;

line1.innerHTML = s;
line2.innerHTML = p;
line3.innerHTML = e;
line4.innerHTML = l;

/*Kollar vilket nummer som ska vilken bild*/
function changePic(number, swap) {

	/*Ersätter nummer med bilder*/
	let one = "<img src='slot_pic/1.jpg' class='slotImg'>";
	let two = "<img src='slot_pic/2.jpg' class='slotImg'>";
	let tree = "<img src='slot_pic/3.jpg' class='slotImg'>";
	let four = "<img src='slot_pic/4.jpg' class='slotImg'>";
	let five = "<img src='slot_pic/5.jpg' class='slotImg'>";
	let six = "<img src='slot_pic/6.jpg' class='slotImg'>";
	let seven = "<img src='slot_pic/7.jpg' class='slotImg'>";
	let eight = "<img src='slot_pic/8.jpg' class='slotImg'>";
	let nine = "<img src='slot_pic/9.jpg' class='slotImg'>";

	if (number === 1) {
		swap.innerHTML = one;
	} else if (number === 2) {
		swap.innerHTML = two;
	} else if (number === 3) {
		swap.innerHTML = tree;
	} else if (number === 4) {
		swap.innerHTML = four;
	} else if (number === 5) {
		swap.innerHTML = five;
	} else if (number === 6) {
		swap.innerHTML = six;
	} else if (number === 7) {
		swap.innerHTML = seven;
	} else if (number === 8) {
		swap.innerHTML = eight;
	} else if (number === 9) {
		swap.innerHTML = nine;
	}
}

changePic(number1, line1);
changePic(number2, line2);
changePic(number3, line3);
changePic(number4, line4);

outputResult.innerHTML = "Insert credit";
outputCredits.innerHTML = credits + " " + "-" + " " + "credits";

/*Kollar om man har några crediter*/
function checkCredits() {

	if (credits === 0) {
		outputResult.style.animation = "blinker 0.5s linear infinite";
		outputResult.innerHTML = "Insert credit..";

	} else {
		flexItem.setAttribute("class", "flip-container");
		outputResult.style.animation = "";
		randomNum();
	}
}

/*4st random nummer och kollar olika spel vinster*/
function randomNum() {
	counter++;
	credits--;
	outputCredits.innerHTML = credits + " " + "-" + " " + "credits";
	number1 = Math.round(Math.random() * 8 + 1);
	number2 = Math.round(Math.random() * 8 + 1);
	number3 = Math.round(Math.random() * 8 + 1);
	number4 = Math.round(Math.random() * 8 + 1);

	changePic(number1, line1);
	changePic(number2, line2);
	changePic(number3, line3);
	changePic(number4, line4);

	if (number1 === number2 && number2 === number3 && number3 === number4) {
		document.title = counter + " " + "st" + " " + "spel för att få jackpot ! !";
		jackpot.style.animation = "blinker 0.7s linear infinite";
		outputResult.style.animation = "blinker 0.5s linear infinite";
		outputResult.innerHTML = "Jackpott 1000 credits";
		credits += 1000;
	} else if (number1 === number2 && number2 === number3 || number2 === number3 && number3 === number4) {
		outputResult.style.animation = "blinker 0.5s linear infinite";
		outputResult.innerHTML = "Win 100 credits";
		jackpot.style.animation = "";
		credits += 100;
	} else if (number1 === number2 && number3 === number4) {
		outputResult.style.animation = "blinker 0.5s linear infinite";
		outputResult.innerHTML = "Win 25 credits";
		jackpot.style.animation = "";
		credits += 25;
	} else if (number1 === number2 || number2 === number3 || number3 === number4) {
		outputResult.style.animation = "blinker 0.5s linear infinite";
		outputResult.innerHTML = "Win 1 credits";
		jackpot.style.animation = "";
		credits += 1;
	} else {
		jackpot.style.animation = "";
		outputResult.style.animation = "";
		outputResult.innerHTML = "No win..";
	}

	outputCredits.innerHTML = credits + " " + "-" + " " + "credits";
}

/*Tar ut vinsen*/
function payOut() {
	flexItem.setAttribute("class", "");
	let creditsSave = credits;
	lastCheckout.value = "Last checkout:" + " " + creditsSave + " " + "credits";
	console.log(creditsSave);
	credits = 0;
	outputCredits.innerHTML = credits + " " + "-" + " " + "credits";
	outputResult.innerHTML = "Insert credit.";
	line1.innerHTML = s;
	line2.innerHTML = p;
	line3.innerHTML = e;
	line4.innerHTML = l;

}
/*Sätter in crediter*/
function payIn() {
	flexItem.setAttribute("class", "");
	let numInput = document.querySelector("#numInput").value;
	credits += Number(numInput);
	outputResult.style.animation = "";
	outputResult.innerHTML = "Play.";
	outputCredits.innerHTML = credits + " " + "-" + " " + "credits";
}
