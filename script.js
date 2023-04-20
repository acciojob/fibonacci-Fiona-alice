function fibonacci(num) {
// your code here
	let a=0,b=1,c=0,i=3;
while(i<=num){  
	
	c=a+b;
	a=b;
     b=c;
	i++;
}
	return c;  
}
let n=prompt("Enter n terms");
let last=fibonacci(n);
alert(last);
module.exports = fibonacci;