//  var x=5;
//  console.log(x);
//  if (x==undefined) {
//  	console.log('x is undefined');
// }
//  else {
//  	console.log('x has been defined');
// }
// var string='Hello';
// string+=' world';
// console.log(string+'!');

// console.log((5+7)/3);
// function test1(a){
// 	console.log(a-5);
// }
// test1();
// var b;
// console.log(b+5);


// var x=4,y=4;
// if (x==y) {
// 	console.log('x=4 is equal to y=4');
// }
// x='4';
// if (x==y) {
// 	console.log('x="4" is equal to y=4');
// }

// if (x===y) {
// 	console.log('strictly: x="4" is equal to y=4');
// }
// else{
// 	console.log('strictly: x="4" is not equal to y=4');
// }

// if (false||null||NaN||undefined||""||0){
// 	console.log('not all false')

// }
// else{
// 	console.log('all false')
// }

// if (true&&'hello'&&1&&-1&&'false'){
// 	console.log('all true')

// }
// else{
// 	console.log('not all true')
// }
// var sum=0
// for (var i = 0; i<10; i++){
// 	console.log(i)
// 	sum=sum+i
// }
// 	console.log('the sum of 0 through 9 is :'+sum);
// function orderChickenWith(sidedish){
// 	sidedish = sidedish||'whatever!'
// 	console.log('chicken with '+sidedish)
// }
// orderChickenWith('noodles');
// orderChickenWith();
// var company=new Object();
// company.name='Facebook';
// company.ceo=new Object();
// company.ceo.firstname='Mark';
// company.ceo.favcolour='Blue';
// console.log(company);
// company['$stock prices']=1000
// console.log(company['$stock prices']);

// var safaricom={
// 	countryOrigin:'Kenya',
// 	CEO:{
// 		firstname:"Bob",
// 		salary:"$100000"
// 	},
// 	BrandColour:'green',
// 	"stock of company":"$1000000000"
// };
// console.log(safaricom);
// console.log(safaricom["stock of company"]);

// function makemultiplier(multiplier){
// 	var myfunct= function(x){
// 		return multiplier * x
// 	};
// 	return myfunct;
// };
// var multiplierBy3=makemultiplier(3);
// console.log(multiplierBy3(10));
// var multiplierBy10000=makemultiplier(10000);
// console.log(multiplierBy10000(20));

// var doOperation=function(x,operation){
// 	return operation(x)
// };
// var result =doOperation(5,multiplierBy3);
// console.log(result);

// var a=7;
// var b=a;
// console.log('value of a is:'+a);
// console.log('value of b is:'+b);
// b=5;
// console.log('After Updating');
// console.log('value of a is:'+a);
// console.log('value of b is:'+b);

// var a={x:7};
// var b=a;
// console.log(a);
// console.log(b);
// b.x=5
// console.log('After Updating');
// console.log(a);
// console.log(b);

// function changingPrimitive(primvalue){
// 	console.log('The value is '+ primvalue);
// 	primvalue=5;
// 	console.log('The value is now '+ primvalue);
// };
// value=7;
// changingPrimitive(value);
// console.log('But the original value was '+value);

// function changingobject(objvalue){
// 	console.log('The value is:');
// 	console.log(objvalue)
// 	objvalue.x=5;
// 	console.log('The value is now ');
// 	console.log(objvalue)
// };
// value={x:7};
// changingobject(value);
// console.log('But the original value was ');
// console.log(value)

// function mytest(){
// 	console.log(this);
// 	this.Myname='kiprop';
// };
// mytest();
// console.log(window.Myname);

// function Circle(radious){
// 	this.radious=radious;
// };
// Circle.prototype.getArea=function(){
// 		return Math.PI * Math.pow(this.radious,2);
//     };
// var myCircle= new Circle(30);
// console.log(myCircle);
// console.log(myCircle.getArea());
// var myotherCircle= new Circle(90);
// console.log(myotherCircle);
// console.log(myotherCircle.getArea());

// var literalCircle={
// 	radious:10,
// 	getArea:function(){
// 		self=this;
// 		console.log(this)
// 	var increaseradious= function(){
// 	self.radious=20;
// }
// increaseradious()
// console.log(self.radious);

// 		return Math.PI * Math.pow(literalCircle.radious,2);
// 	}


// }
// console.log(literalCircle);
// console.log(literalCircle.getArea());
// var array=new Array();
// array[0]='Victor';
// array[1]=1;
// array[2]={name:'Victor'};
// array[3]=function (name1,name2){
// 	console.log('The name of the tutor is '+ name1+' He teaches '+name2);
// };
// array[4]='HTML, CSS and JavaScript web development';
// console.log(array[0]);
// array[3](array[0],array[4]);

// var names=['Victor','Yaakov','John','Peter','Enock'];
// names[100]='Joe';
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello "+names[i]);
// };

var myObj={
	name:'Yaakov',
	course:'HTML/CSS/JS',
	Platform:'Coursera'
}
for (var prop in myObj){
	console.log(prop+':'+myObj[prop]);
};
var names=['Victor','Yaakov','John','Peter','Enock'];
names.greeting='hi'
for(var name in names){
	console.log('Hello '+names[name]);
}