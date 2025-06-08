//immediately invoked function expressions(iife)

(function chai(){//named iife
    console.log(`DB CONNECTED`)
})();//iife,seicolon is imp to end the context

((name)=>{
    console.log(`DB2 CONNECTED ${name}`)
})("aj");

(()=>{
    console.log(`DB3 CONNECTED`)
})();



