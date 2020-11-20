// Define a RegEx, which will implement next rules for valid email:
// <some symbols, at least 1: a-zA-Z0-9_.->@<at least 1 lower letters>.<some lower letters{1-3}>;
// let re = /<YOUR CODE HERE>/
const re = /^[\w.-]+@[a-z]+\.[a-z]{1,3}$/;

// TESTS:
const userMails = [
	"progressbg.www.courses@gmail.com", // OK
	"progressbg@gmail.coms", // invalid (4 letters for TLD not allowed by our rules)
	"progressbg-www@gmail.com", // OK
	"@gmail.com", // invalid (missing local part, i.e. symbols before '@')
	"*progressbg*@gmail.com", // invalid ('*' in local part is not allowed)
	"progressbg@com", // invalid ('com' is not valid domain name, )
]

userMails.forEach(str => {
	if(re.test(str)){
		console.log(`OK`);
	}else{
		console.log(`NO MATCH`);
	}
});

// EXPECTED OUTPUT:
// OK
// NO MATCH
// OK
// NO MATCH
// NO MATCH
// NO MATCH

console.log("~~~New Task~~~")
// Define a RegEx, which will implement next rules for valid bg mobile phone number:
// <((plus or 00)359) or 0) 2 x (7 or 8) 7 x any digit, ignore single non-word symbols and multiple white space>;

const reg = /^\W?\s*(?:(?:\+\s*|00)359|0)\W?\s*[78]{2}\W?\s*(?:\d\W?\s*){6}\d\s*$/

// TESTS:
const userMobile = [
    "0888587038",
    "0888 587 038",
    "0888 58 70 38",
    "088 8  587 038",
    "0888/587 038",
    "+359888587038",
    "0035988 858 70 38",
    "00359 888-587-038 ",
    "(+ 359)888587038  ",
    "(0)    888 587 038",
    
    "088587038",
    "888 587 038",
    "0888// 58 70 38",
    "p888  587 038",
    "0888/87 038",
    "359888587038",
    "035988 858 70 38",
    "00359 88858703 ",
    "(+44)888587038  ",
    "(0)    888 587 0311"
]

userMobile.forEach(str => {
	if(reg.test(str)){
		console.log(`OK`);
	}else{
		console.log(`NO MATCH`);
	}
});

