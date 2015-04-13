//P2 req. 4-A

var isArmstrong = function(anum){
	"use strict";
	//declare local variables
	var raised = 0;
	//check that anum is a number between 1 and 5
	if (String(anum).length > 5 || isNaN(anum)){
		return "Please enter a one to five digit number"
	}
	//convert anum to a string
	anum = String(anum);
	//find the length of anum
	var n = anum.length;
	//raise the individual digits of anum  to n and add together
	for(var i = 0; i < anum.length; ++i){
		//console.log(raised);
		//raise each digit to n and add to variable 'raised'
		raised = raised + Math.pow(Number(anum[i]), n);
	}
	return raised == Number(anum);
}

//P2 req. 4-B

var allArmstrongs = function(){
	"use strict";
	//declare local variables

	var num = 1;
	//truenums holds the armstrong numbers
	var allnums = "";
	while(num < 100000){
		//process all numbers between 1 - 99,999
		//check if num is an armstrong number
		if (isArmstrong(num)){
			//add to allnums if armstrong number
			allnums = allnums + num + " ";
		}
		num = num + 1
	}
	return allnums
}

//P2 req. 4-C

var allSubstrings1 = function(s){
	"use strict";
	//declare local variables

	var result = "";
	for(var y = 0; y < s.length; ++y){
		//incrementally change starting point for substring
		for(var i = y + 1; i < s.length + 1; ++i){
			//incrementally change ending point for substring
			result = result + s.substring(y, i) + ", ";
			//add substring to 'result'
		}
	}

	return result;
}

//P2 req. 4-D 

var allSubstrings2 = function(s){
	"use strict";
	//declare local variables

	var allsubs = new Array();
	for(var y = 0; y < s.length; ++y){
		//incrementally change starting point for substring
		for(var i = y + 1; i < s.length + 1; ++i){
			//incrementally change ending point for substring
			allsubs.push(s.substring(y, i))
			//add substring to array 'allsubs'
		}
	}

	return allsubs
}

//P2 req. 4-E

var maxWord = function(s){
	"use strict";
	//declare local variables

	var s = String(s);

	//make array of words in s
	var wlist = s.split(" ");

	//make variable to log longest word
	var lword = "";

	//go through each word in the array wlist and compare to 
	//the longest word so far, as recorded in 'lword'
	for(var i = 0; i < wlist.length; ++i){
		if(wlist[i].length > lword.length){
			lword = wlist[i];
		}
		//console.log(lword + " " + wlist[i]);
	}

	return lword;
}




