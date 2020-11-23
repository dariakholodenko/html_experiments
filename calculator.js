function convertBD() {
	var bin = document.getElementById("bin").value;
	document.getElementById("dec").value = twoTOten(bin);
}

function convertDB() {	
	var dec = document.getElementById("dec").value;
	document.getElementById("bin").value = tenToTwo(dec);
}

function twoTOten(num) {
	var ret = 0;
	var cnt = 1;
	
	while(num >= 1) {
		ret += cnt*(num % 10);
		num = Math.floor(num/10);
		cnt *= 2;
	}
	
	return ret;
}

function tenToTwo(num) {
	var ret = 0;
	var cnt = 1;
	
	while(num >= 1) 	{
		ret += cnt*(num%2);
		num = Math.floor(num/2);
		cnt *= 10;
	}
	
	return ret;
}
