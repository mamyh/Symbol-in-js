//IIFE
(function(){
    var title = "javascript";
    //1.title ke new String("javascript") a convert hoi
    //2.convert parameter "javascript" into RegExp
    //3.RegExp er moddhe Symbol.search() er implementation ase kina
    console.log(title.search('script'));
    
    class Product{
        constructor(title){
            this.title = title;
        }

        //implement search
        [Symbol.search](string){
            return string.indexOf(this.title) >=0 ? 'found':'not found';
        }
    }
    console.log("javascript".search('script'));//using default search method .we havent change it because we use Symbol.
    var laptop = new Product('laptop')
     console.log("hp laptop".search(laptop));//using my search 
     //another IIFE
     (function(){
        function myFunc(){
             var PVT=Symbol('this is a private property');
             return {
                 modify(obj){
                     obj[PVT] = true;
                 },
                 output(obj){
                     return obj[PVT];
                 }
             }
         }
         const value = myFunc();
         const obj ={a:1,b:2};
         value.modify(obj);
         console.log(value.output(obj));
         console.log(obj);
         delete obj["Symbol(this is a private property)"];
         console.log(obj);
         var p={a:1,b:2}
         delete p["a"];
         console.log(p);
     })()
})();