function fibonacci(num) {
let a=1
let b=1
	if(num<3)
	{
		return a;
	}
	else
	{
		let sum=1
		for(let i=3;i<=num;i++)
			{
				sum=a+b
				a=b;
				b=sum;
			}
		return sum
	}
}

module.exports = fibonacci;