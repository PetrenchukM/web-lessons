function Vlitr(){
    let gal=0.26417205235815,m=0.001,pin=2.1133764188652,bar=0.0062898107704321;
    let l= prompt('Skolko litriv?', [1]);
    alert(`${l} л = ${l*gal} галонів = ${l*m} метрів кубічних= ${l*pin} пінти =${l*bar} барелів`)
    console.log(`${l} л = ${l*gal} галонів = ${l*m} метрів кубічних= ${l*pin} пінти =${l*bar} барелів`)
}
function lin_riv(){
    let a= prompt('Vvedit a', [1]);
    
    let resultat;
    if(a==0){
        resultat="Pomilka a ne moze buti 0";
    }
    else{
        let b= prompt('Vvedit b', [1]);
        resultat=-b/a;
    }
    alert(`Rezultat ax+b=0 : ${resultat}`)
    console.log(`Rezultat ax+b=0 : ${resultat}`)
}