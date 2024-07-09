//Arreglo de pokemons
let pokemons =
    ['bulbasaur',
        'ivysaur',
        'venusaur',
        'charmander',
        'charmeleon',
        'charizard',
        'squirtle',
        'wartortle',
        'blastoise',
        'caterpie',
        'metapod',
        'butterfree',
        'weedle',
        'kakuna',
        'beedrill',
        'pidgey',
        'pidgeotto',
        'pidgeot',
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'ekans',
        'arbok',
        'pikachu',
        'raichu',
        'sandshrew',
        'sandslash',
        'nidoran-f',
        'nidorina',
        'nidoqueen',
        'nidoran-m',
        'nidorino',
        'nidoking',
        'clefairy',
        'clefable',
        'vulpix',
        'ninetales',
        'jigglypuff',
        'wigglytuff',
        'zubat',
        'golbat',
        'oddish',
        'gloom',
        'vileplume',
        'paras',
        'parasect',
        'venonat',
        'venomoth',
        'diglett',
        'dugtrio',
        'meowth',
        'persian',
        'psyduck',
        'golduck',
        'mankey',
        'primeape',
        'growlithe',
        'arcanine',
        'poliwag',
        'poliwhirl',
        'poliwrath',
        'abra',
        'kadabra',
        'alakazam',
        'machop',
        'machoke',
        'machamp',
        'bellsprout',
        'weepinbell',
        'victreebel',
        'tentacool',
        'tentacruel',
        'geodude',
        'graveler',
        'golem',
        'ponyta',
        'rapidash',
        'slowpoke',
        'slowbro',
        'magnemite',
        'magneton',
        'farfetchd',
        'doduo',
        'dodrio',
        'seel',
        'dewgong',
        'grimer',
        'muk',
        'shellder',
        'cloyster',
        'gastly',
        'haunter',
        'gengar',
        'onix',
        'drowzee',
        'hypno',
        'krabby',
        'kingler',
        'voltorb']

// Preguntar al usuario un numero - la entrada la pasamos a enteros -->parseInt - Number
//Mostrar Pokemons que son multiplos de 5
var num = parseInt(prompt('Dame un Número del 1 al 100: ')); //Preguntando a cx para que defina num

if (num !== NaN && num <= 100) { //Si la entrada es un numero y es menor a 100, entonces corre
    for (let i = 0; i <= num; i++) { //Corremos condicional for desde 0 hasta el input que de el cx
        if ((i) % 5 === 0) { //Buscamos el numero que dividido entre (5), de 0 de residuo === Multiplos de 5
            console.log('El Pokemon #', i, 'es ', pokemons[i]); // Se imprime a consola y se utiliza el arreglo
        }
    }
} else {
    console.log('Ingresaste un número incorrecto, intenta de nuevo recargando la página');
}
//Mostrar multiplos de 5 e imprimirlos IMPLEMENTAR LOGICA
//console.log(pokemons[i])

/*
//Programa que corra arreglo, pero solo muestre numeros.
let arreglo = [1, 'Aguacate', 77, 'Perro', 42, true, false, 0];

console.log ('Elementos Numéricos de Arreglo:');

for (let i = 0; i < arreglo.length; i++){
    if (typeof arreglo[i] === 'number'){
        console.log(arreglo[i]);
    }
}
*/
