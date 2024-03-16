// function test() {
//     console.log('Hello');
// }
//  test();

 function Test2() : number {
    const x = 40;
    return x;
 };

 console.log(Test2());

 function Test3() : void {
    document.querySelector('.root').textContent = 'Hello world!';
 }

 Test3();

 function Test4(x: number, y: number) : number {
   return x * y;
 }
 
 console.log(30 - Test4(2, 5));

 function Test5(x: number, y:number) : void {
console.log(x * y);
 }

 Test5(5, 6);

 function Test6(x: number, y?: number) : number {
   return y !== undefined ? x * y : x;   
 }

 console.log(Test6(7));

 function Test7(x?: number, y?: number) : number | string {
   return y !== undefined && x !== undefined ? x * y : 'enter value';   
 }

 console.log(Test7());

 function checkEmail(email: string) : string | boolean {
   return email.indexOf('@') !== -1 ? email.toLowerCase() : false;
 }

 console.log(checkEmail('vasea@  pupkin'));

 function checkEmail2(email: string) : string {
   return email.indexOf('@') !== -1 ? 'Hello user' : 'Invalid user';
 }

 console.log(checkEmail2('vasea@pupkin'));

 

 
 