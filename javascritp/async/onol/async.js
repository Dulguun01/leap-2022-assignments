 function prepareCoffee(){
    const coffeePromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Prepared coffee')
        },1000);
        return coffeePromise


    });

}
 function prepareCoffee(){
    const eggPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Prepared coffee')
        },2000);
        return eggPromise


    });



async function startMorning(){
    await prepareCoffee()
    console.log()

}