var pokeConteoShiny = 0;
var pokeConteoReverse = 0;
var pokeConteoGender = 0;
var pokeConteoAtaque = 0;
var buscaPokemon = 0;

 
 function cambioFondo(){
     const wallpapers = [
         'url("./Imágenes/fondo1.jpg")',
         'url("./Imágenes/fondo2.jpg")',
         'url("./Imágenes/fondo3.jpg")',
         'url("./Imágenes/fondo4.jpg")',
         'url("./Imágenes/fondo5.jpg")',
         'url("./Imágenes/fondo6.jpg")',
         'url("./Imágenes/fondo7.jpg")',
         'url("./Imágenes/fondo8.jpg")',
         'url("./Imágenes/fondo9.jpg")',
         'url("./Imágenes/fondo10.jpg")',
         'url("./Imágenes/fondo11.jpg")',
     ]
     const section = document.querySelector('section')
     const fondo = wallpapers[Math.floor(Math.random() * wallpapers.length)];
     section.style.backgroundImage = fondo;
}

setInterval(cambioFondo,10000);

const fetchPokemon = () => {
    pokeConteoAtaque = 0;
    const pokeNameInput = document.getElementById("pokeBusqueda");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Imágenes/pokebola.png")
            pokeEvo1("./Imágenes/pokebola.png")
            pokeEvo2("./Imágenes/pokebola.png")
            pokeEvo3("./Imágenes/pokebola.png")
            document.getElementById("pokeNombre").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion1").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion2").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion3").innerHTML = "SIN DATO";
            document.getElementById("pokeNumero").innerHTML = "0";
            document.getElementById("tipo1").innerHTML = "SIN DATO";
            document.getElementById("tipo2").innerHTML = "SIN DATO";
            botonTipo1.className = "sinClase";
            botonTipo2.className = "sinClase";
            document.getElementById("pokeExperiencia").innerHTML = "SIN DATO ";
            document.getElementById("pokeAltura").innerHTML = "SIN DATO ";
            document.getElementById("pokePeso").innerHTML = "SIN DATO ";
            document.getElementById("stat1Valor").innerHTML = "0";
            document.getElementById("stat2Valor").innerHTML = "0";
            document.getElementById("stat3Valor").innerHTML = "0";
            document.getElementById("stat4Valor").innerHTML = "0";
            document.getElementById("stat5Valor").innerHTML = "0";
            document.getElementById("stat6Valor").innerHTML = "0";
            document.getElementById("nombreAtaque").innerHTML = "SIN DATO";
            document.getElementById("tipoAtaque").innerHTML = "SIN DATO";
            document.getElementById("estadisticasAtaque").innerHTML = "SIN DATO";
            document.getElementById("estatusAtaque").innerHTML = "SIN DATO";


        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeImgEvo1 = data.sprites.other.dream_world.front_default;
            pokeEvo1(pokeImgEvo1);

            if(pokeImgEvo1 == null){
                pokeEvo1("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo1 != null){
                document.getElementById("nombreEvolucion1").innerHTML = "DREAM WORLD";
            }

            let pokeImgEvo2 = data.sprites.other.home.front_default;
            pokeEvo2(pokeImgEvo2);

            if(pokeImgEvo2 == null){
                pokeEvo2("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo2 != null){
                document.getElementById("nombreEvolucion2").innerHTML = "HOME";
            }

            let pokeImgEvo3 = data.sprites.other["official-artwork"].front_default
            pokeEvo3(pokeImgEvo3);

            if(pokeImgEvo3 == null){
                pokeEvo3("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo3 != null){
                document.getElementById("nombreEvolucion3").innerHTML = "OFFICIAL ARTWORK";
            }

            let pokeTipo1 = data.types[0].type.name;
            document.getElementById("tipo1").innerHTML = pokeTipo1;
            botonTipo1.className = pokeTipo1

            console.log(data.types.length)

            if (data.types.length > 1){
                let pokeTipo2 = data.types[1].type.name;
                document.getElementById("tipo2").innerHTML = pokeTipo2;
                botonTipo2.className = pokeTipo2
            }

            if (data.types.length == 1){
                botonTipo2.className = "sinClase"
            }

            let pokeName = data.name;
            document.getElementById("pokeNombre").innerHTML = pokeName;

            let pokeNumber = data.id;
            document.getElementById("pokeNumero").innerHTML = pokeNumber;

            let pokeExperiencia = data.base_experience;
            document.getElementById("pokeExperiencia").innerHTML = pokeExperiencia;

            let pokeAltura = data.height;
            document.getElementById("pokeAltura").innerHTML = pokeAltura/10;

            let pokePeso = data.weight;
            document.getElementById("pokePeso").innerHTML = pokePeso/10;

            let pokeStat1 = data.stats[0].stat.name;
            document.getElementById("stat1").innerHTML = pokeStat1;

            let pokeStat1Valor = data.stats[0].base_stat;
            document.getElementById("stat1Valor").innerHTML = pokeStat1Valor;

            let pokeStat2 = data.stats[1].stat.name;
            document.getElementById("stat2").innerHTML = pokeStat2;

            let pokeStat2Valor = data.stats[1].base_stat;
            document.getElementById("stat2Valor").innerHTML = pokeStat2Valor;

            let pokeStat3 = data.stats[2].stat.name;
            document.getElementById("stat3").innerHTML = pokeStat3;

            let pokeStat3Valor = data.stats[2].base_stat;
            document.getElementById("stat3Valor").innerHTML = pokeStat3Valor;

            let pokeStat4 = data.stats[3].stat.name;
            document.getElementById("stat4").innerHTML = pokeStat4;

            let pokeStat4Valor = data.stats[3].base_stat;
            document.getElementById("stat4Valor").innerHTML = pokeStat4Valor;

            let pokeStat5 = data.stats[4].stat.name;
            document.getElementById("stat5").innerHTML = pokeStat5;

            let pokeStat5Valor = data.stats[4].base_stat;
            document.getElementById("stat5Valor").innerHTML = pokeStat5Valor;

            let pokeStat6 = data.stats[5].stat.name;
            document.getElementById("stat6").innerHTML = pokeStat6;
            
            let pokeStat6Valor = data.stats[5].base_stat;
            document.getElementById("stat6Valor").innerHTML = pokeStat6Valor;
            
            let pokeAtaque = data.moves[pokeConteoAtaque].move.name;
            document.getElementById("nombreAtaque").innerHTML = pokeAtaque;

            let pokeNivel = data.moves[pokeConteoAtaque].version_group_details[0].level_learned_at;
            document.getElementById("tipoAtaque").innerHTML = pokeNivel;

            let pokeAprende = data.moves[pokeConteoAtaque].version_group_details[0].move_learn_method.name;
            document.getElementById("estadisticasAtaque").innerHTML = pokeAprende;

            let pokeAparece = data.moves[pokeConteoAtaque].version_group_details[0].version_group.name;
            document.getElementById("estatusAtaque").innerHTML = pokeAparece;

            buscaPokemon = pokeNumber;
        }
    });
}

const fetchPokemonNumber = () => {
    pokeConteoAtaque = 0;
    const pokeNumberInput = document.getElementById("numeroPokemon");
    if (pokeNumberInput < 1){
        pokeNumberInput = 0;
    }
    let pokeNameNumber = pokeNumberInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNameNumber}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Imágenes/pokebola.png")
            pokeEvo1("./Imágenes/pokebola.png")
            pokeEvo2("./Imágenes/pokebola.png")
            pokeEvo3("./Imágenes/pokebola.png")
            document.getElementById("pokeNombre").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion1").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion2").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion3").innerHTML = "SIN DATO";
            document.getElementById("pokeNumero").innerHTML = "0";
            document.getElementById("tipo1").innerHTML = "SIN DATO";
            document.getElementById("tipo2").innerHTML = "SIN DATO";
            botonTipo1.className = "sinClase";
            botonTipo2.className = "sinClase";
            document.getElementById("pokeExperiencia").innerHTML = "SIN DATO ";
            document.getElementById("pokeAltura").innerHTML = "SIN DATO ";
            document.getElementById("pokePeso").innerHTML = "SIN DATO ";
            document.getElementById("stat1Valor").innerHTML = "0";
            document.getElementById("stat2Valor").innerHTML = "0";
            document.getElementById("stat3Valor").innerHTML = "0";
            document.getElementById("stat4Valor").innerHTML = "0";
            document.getElementById("stat5Valor").innerHTML = "0";
            document.getElementById("stat6Valor").innerHTML = "0";
            document.getElementById("nombreAtaque").innerHTML = "SIN DATO";
            document.getElementById("tipoAtaque").innerHTML = "SIN DATO";
            document.getElementById("estadisticasAtaque").innerHTML = "SIN DATO";
            document.getElementById("estatusAtaque").innerHTML = "SIN DATO";


        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeImgEvo1 = data.sprites.other.dream_world.front_default;
            pokeEvo1(pokeImgEvo1);

            if(pokeImgEvo1 == null){
                pokeEvo1("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo1 != null){
                document.getElementById("nombreEvolucion1").innerHTML = "DREAM WORLD";
            }

            let pokeImgEvo2 = data.sprites.other.home.front_default;
            pokeEvo2(pokeImgEvo2);

            if(pokeImgEvo2 == null){
                pokeEvo2("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo2 != null){
                document.getElementById("nombreEvolucion2").innerHTML = "HOME";
            }

            let pokeImgEvo3 = data.sprites.other["official-artwork"].front_default
            pokeEvo3(pokeImgEvo3);

            if(pokeImgEvo3 == null){
                pokeEvo3("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo3 != null){
                document.getElementById("nombreEvolucion3").innerHTML = "OFFICIAL ARTWORK";
            }

            let pokeTipo1 = data.types[0].type.name;
            document.getElementById("tipo1").innerHTML = pokeTipo1;
            botonTipo1.className = pokeTipo1

            console.log(data.types.length)

            if (data.types.length > 1){
                let pokeTipo2 = data.types[1].type.name;
                document.getElementById("tipo2").innerHTML = pokeTipo2;
                botonTipo2.className = pokeTipo2
            }

            if (data.types.length == 1){
                botonTipo2.className = "sinClase"
            }

            let pokeName = data.name;
            document.getElementById("pokeNombre").innerHTML = pokeName;

            let pokeNumber = data.id;
            document.getElementById("pokeNumero").innerHTML = pokeNumber;

            let pokeExperiencia = data.base_experience;
            document.getElementById("pokeExperiencia").innerHTML = pokeExperiencia;

            let pokeAltura = data.height;
            document.getElementById("pokeAltura").innerHTML = pokeAltura/10;

            let pokePeso = data.weight;
            document.getElementById("pokePeso").innerHTML = pokePeso/10;

            let pokeStat1 = data.stats[0].stat.name;
            document.getElementById("stat1").innerHTML = pokeStat1;

            let pokeStat1Valor = data.stats[0].base_stat;
            document.getElementById("stat1Valor").innerHTML = pokeStat1Valor;

            let pokeStat2 = data.stats[1].stat.name;
            document.getElementById("stat2").innerHTML = pokeStat2;

            let pokeStat2Valor = data.stats[1].base_stat;
            document.getElementById("stat2Valor").innerHTML = pokeStat2Valor;

            let pokeStat3 = data.stats[2].stat.name;
            document.getElementById("stat3").innerHTML = pokeStat3;

            let pokeStat3Valor = data.stats[2].base_stat;
            document.getElementById("stat3Valor").innerHTML = pokeStat3Valor;

            let pokeStat4 = data.stats[3].stat.name;
            document.getElementById("stat4").innerHTML = pokeStat4;

            let pokeStat4Valor = data.stats[3].base_stat;
            document.getElementById("stat4Valor").innerHTML = pokeStat4Valor;

            let pokeStat5 = data.stats[4].stat.name;
            document.getElementById("stat5").innerHTML = pokeStat5;

            let pokeStat5Valor = data.stats[4].base_stat;
            document.getElementById("stat5Valor").innerHTML = pokeStat5Valor;

            let pokeStat6 = data.stats[5].stat.name;
            document.getElementById("stat6").innerHTML = pokeStat6;
            
            let pokeStat6Valor = data.stats[5].base_stat;
            document.getElementById("stat6Valor").innerHTML = pokeStat6Valor;
            
            let pokeAtaque = data.moves[pokeConteoAtaque].move.name;
            document.getElementById("nombreAtaque").innerHTML = pokeAtaque;

            let pokeNivel = data.moves[pokeConteoAtaque].version_group_details[0].level_learned_at;
            document.getElementById("tipoAtaque").innerHTML = pokeNivel;

            let pokeAprende = data.moves[pokeConteoAtaque].version_group_details[0].move_learn_method.name;
            document.getElementById("estadisticasAtaque").innerHTML = pokeAprende;

            let pokeAparece = data.moves[pokeConteoAtaque].version_group_details[0].version_group.name;
            document.getElementById("estatusAtaque").innerHTML = pokeAparece;

            buscaPokemon = pokeNumber;

        }
    });
}

const fetchPokeAdelante = () => {
    pokeConteoAtaque = 0;
    buscaPokemon = buscaPokemon + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Imágenes/pokebola.png")
            pokeEvo1("./Imágenes/pokebola.png")
            pokeEvo2("./Imágenes/pokebola.png")
            pokeEvo3("./Imágenes/pokebola.png")
            document.getElementById("pokeNombre").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion1").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion2").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion3").innerHTML = "SIN DATO";
            document.getElementById("pokeNumero").innerHTML = "0";
            document.getElementById("tipo1").innerHTML = "SIN DATO";
            document.getElementById("tipo2").innerHTML = "SIN DATO";
            botonTipo1.className = "sinClase";
            botonTipo2.className = "sinClase";
            document.getElementById("pokeExperiencia").innerHTML = "SIN DATO ";
            document.getElementById("pokeAltura").innerHTML = "SIN DATO ";
            document.getElementById("pokePeso").innerHTML = "SIN DATO ";
            document.getElementById("stat1Valor").innerHTML = "0";
            document.getElementById("stat2Valor").innerHTML = "0";
            document.getElementById("stat3Valor").innerHTML = "0";
            document.getElementById("stat4Valor").innerHTML = "0";
            document.getElementById("stat5Valor").innerHTML = "0";
            document.getElementById("stat6Valor").innerHTML = "0";
            document.getElementById("nombreAtaque").innerHTML = "SIN DATO";
            document.getElementById("tipoAtaque").innerHTML = "SIN DATO";
            document.getElementById("estadisticasAtaque").innerHTML = "SIN DATO";
            document.getElementById("estatusAtaque").innerHTML = "SIN DATO";


        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeImgEvo1 = data.sprites.other.dream_world.front_default;
            pokeEvo1(pokeImgEvo1);

            if(pokeImgEvo1 == null){
                pokeEvo1("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo1 != null){
                document.getElementById("nombreEvolucion1").innerHTML = "DREAM WORLD";
            }

            let pokeImgEvo2 = data.sprites.other.home.front_default;
            pokeEvo2(pokeImgEvo2);

            if(pokeImgEvo2 == null){
                pokeEvo2("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo2 != null){
                document.getElementById("nombreEvolucion2").innerHTML = "HOME";
            }

            let pokeImgEvo3 = data.sprites.other["official-artwork"].front_default
            pokeEvo3(pokeImgEvo3);

            if(pokeImgEvo3 == null){
                pokeEvo3("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo3 != null){
                document.getElementById("nombreEvolucion3").innerHTML = "OFFICIAL ARTWORK";
            }

            let pokeTipo1 = data.types[0].type.name;
            document.getElementById("tipo1").innerHTML = pokeTipo1;
            botonTipo1.className = pokeTipo1

            console.log(data.types.length)

            if (data.types.length > 1){
                let pokeTipo2 = data.types[1].type.name;
                document.getElementById("tipo2").innerHTML = pokeTipo2;
                botonTipo2.className = pokeTipo2
            }

            if (data.types.length == 1){
                botonTipo2.className = "sinClase"
            }

            let pokeName = data.name;
            document.getElementById("pokeNombre").innerHTML = pokeName;

            let pokeNumber = data.id;
            document.getElementById("pokeNumero").innerHTML = pokeNumber;

            let pokeExperiencia = data.base_experience;
            document.getElementById("pokeExperiencia").innerHTML = pokeExperiencia;

            let pokeAltura = data.height;
            document.getElementById("pokeAltura").innerHTML = pokeAltura/10;

            let pokePeso = data.weight;
            document.getElementById("pokePeso").innerHTML = pokePeso/10;

            let pokeStat1 = data.stats[0].stat.name;
            document.getElementById("stat1").innerHTML = pokeStat1;

            let pokeStat1Valor = data.stats[0].base_stat;
            document.getElementById("stat1Valor").innerHTML = pokeStat1Valor;

            let pokeStat2 = data.stats[1].stat.name;
            document.getElementById("stat2").innerHTML = pokeStat2;

            let pokeStat2Valor = data.stats[1].base_stat;
            document.getElementById("stat2Valor").innerHTML = pokeStat2Valor;

            let pokeStat3 = data.stats[2].stat.name;
            document.getElementById("stat3").innerHTML = pokeStat3;

            let pokeStat3Valor = data.stats[2].base_stat;
            document.getElementById("stat3Valor").innerHTML = pokeStat3Valor;

            let pokeStat4 = data.stats[3].stat.name;
            document.getElementById("stat4").innerHTML = pokeStat4;

            let pokeStat4Valor = data.stats[3].base_stat;
            document.getElementById("stat4Valor").innerHTML = pokeStat4Valor;

            let pokeStat5 = data.stats[4].stat.name;
            document.getElementById("stat5").innerHTML = pokeStat5;

            let pokeStat5Valor = data.stats[4].base_stat;
            document.getElementById("stat5Valor").innerHTML = pokeStat5Valor;

            let pokeStat6 = data.stats[5].stat.name;
            document.getElementById("stat6").innerHTML = pokeStat6;
            
            let pokeStat6Valor = data.stats[5].base_stat;
            document.getElementById("stat6Valor").innerHTML = pokeStat6Valor;
            
            let pokeAtaque = data.moves[pokeConteoAtaque].move.name;
            document.getElementById("nombreAtaque").innerHTML = pokeAtaque;

            let pokeNivel = data.moves[pokeConteoAtaque].version_group_details[0].level_learned_at;
            document.getElementById("tipoAtaque").innerHTML = pokeNivel;

            let pokeAprende = data.moves[pokeConteoAtaque].version_group_details[0].move_learn_method.name;
            document.getElementById("estadisticasAtaque").innerHTML = pokeAprende;

            let pokeAparece = data.moves[pokeConteoAtaque].version_group_details[0].version_group.name;
            document.getElementById("estatusAtaque").innerHTML = pokeAparece;
        }
    });
}

const fetchPokeAtras = () => {
    pokeConteoAtaque = 0;
    buscaPokemon = buscaPokemon - 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Imágenes/pokebola.png")
            pokeEvo1("./Imágenes/pokebola.png")
            pokeEvo2("./Imágenes/pokebola.png")
            pokeEvo3("./Imágenes/pokebola.png")
            document.getElementById("pokeNombre").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion1").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion2").innerHTML = "SIN DATO";
            document.getElementById("nombreEvolucion3").innerHTML = "SIN DATO";
            document.getElementById("pokeNumero").innerHTML = "0";
            document.getElementById("tipo1").innerHTML = "SIN DATO";
            document.getElementById("tipo2").innerHTML = "SIN DATO";
            botonTipo1.className = "sinClase";
            botonTipo2.className = "sinClase";
            document.getElementById("pokeExperiencia").innerHTML = "SIN DATO ";
            document.getElementById("pokeAltura").innerHTML = "SIN DATO ";
            document.getElementById("pokePeso").innerHTML = "SIN DATO ";
            document.getElementById("stat1Valor").innerHTML = "0";
            document.getElementById("stat2Valor").innerHTML = "0";
            document.getElementById("stat3Valor").innerHTML = "0";
            document.getElementById("stat4Valor").innerHTML = "0";
            document.getElementById("stat5Valor").innerHTML = "0";
            document.getElementById("stat6Valor").innerHTML = "0";
            document.getElementById("nombreAtaque").innerHTML = "SIN DATO";
            document.getElementById("tipoAtaque").innerHTML = "SIN DATO";
            document.getElementById("estadisticasAtaque").innerHTML = "SIN DATO";
            document.getElementById("estatusAtaque").innerHTML = "SIN DATO";


        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeImgEvo1 = data.sprites.other.dream_world.front_default;
            pokeEvo1(pokeImgEvo1);

            if(pokeImgEvo1 == null){
                pokeEvo1("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo1 != null){
                document.getElementById("nombreEvolucion1").innerHTML = "DREAM WORLD";
            }

            let pokeImgEvo2 = data.sprites.other.home.front_default;
            pokeEvo2(pokeImgEvo2);

            if(pokeImgEvo2 == null){
                pokeEvo2("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo2 != null){
                document.getElementById("nombreEvolucion2").innerHTML = "HOME";
            }

            let pokeImgEvo3 = data.sprites.other["official-artwork"].front_default
            pokeEvo3(pokeImgEvo3);

            if(pokeImgEvo3 == null){
                pokeEvo3("./Imágenes/pokebola.png")
            }

            if(pokeImgEvo3 != null){
                document.getElementById("nombreEvolucion3").innerHTML = "OFFICIAL ARTWORK";
            }

            let pokeTipo1 = data.types[0].type.name;
            document.getElementById("tipo1").innerHTML = pokeTipo1;
            botonTipo1.className = pokeTipo1

            console.log(data.types.length)

            if (data.types.length > 1){
                let pokeTipo2 = data.types[1].type.name;
                document.getElementById("tipo2").innerHTML = pokeTipo2;
                botonTipo2.className = pokeTipo2
            }

            if (data.types.length == 1){
                botonTipo2.className = "sinClase"
            }

            let pokeName = data.name;
            document.getElementById("pokeNombre").innerHTML = pokeName;

            let pokeNumber = data.id;
            document.getElementById("pokeNumero").innerHTML = pokeNumber;

            let pokeExperiencia = data.base_experience;
            document.getElementById("pokeExperiencia").innerHTML = pokeExperiencia;

            let pokeAltura = data.height;
            document.getElementById("pokeAltura").innerHTML = pokeAltura/10;

            let pokePeso = data.weight;
            document.getElementById("pokePeso").innerHTML = pokePeso/10;

            let pokeStat1 = data.stats[0].stat.name;
            document.getElementById("stat1").innerHTML = pokeStat1;

            let pokeStat1Valor = data.stats[0].base_stat;
            document.getElementById("stat1Valor").innerHTML = pokeStat1Valor;

            let pokeStat2 = data.stats[1].stat.name;
            document.getElementById("stat2").innerHTML = pokeStat2;

            let pokeStat2Valor = data.stats[1].base_stat;
            document.getElementById("stat2Valor").innerHTML = pokeStat2Valor;

            let pokeStat3 = data.stats[2].stat.name;
            document.getElementById("stat3").innerHTML = pokeStat3;

            let pokeStat3Valor = data.stats[2].base_stat;
            document.getElementById("stat3Valor").innerHTML = pokeStat3Valor;

            let pokeStat4 = data.stats[3].stat.name;
            document.getElementById("stat4").innerHTML = pokeStat4;

            let pokeStat4Valor = data.stats[3].base_stat;
            document.getElementById("stat4Valor").innerHTML = pokeStat4Valor;

            let pokeStat5 = data.stats[4].stat.name;
            document.getElementById("stat5").innerHTML = pokeStat5;

            let pokeStat5Valor = data.stats[4].base_stat;
            document.getElementById("stat5Valor").innerHTML = pokeStat5Valor;

            let pokeStat6 = data.stats[5].stat.name;
            document.getElementById("stat6").innerHTML = pokeStat6;
            
            let pokeStat6Valor = data.stats[5].base_stat;
            document.getElementById("stat6Valor").innerHTML = pokeStat6Valor;
            
            let pokeAtaque = data.moves[pokeConteoAtaque].move.name;
            document.getElementById("nombreAtaque").innerHTML = pokeAtaque;

            let pokeNivel = data.moves[pokeConteoAtaque].version_group_details[0].level_learned_at;
            document.getElementById("tipoAtaque").innerHTML = pokeNivel;

            let pokeAprende = data.moves[pokeConteoAtaque].version_group_details[0].move_learn_method.name;
            document.getElementById("estadisticasAtaque").innerHTML = pokeAprende;

            let pokeAparece = data.moves[pokeConteoAtaque].version_group_details[0].version_group.name;
            document.getElementById("estatusAtaque").innerHTML = pokeAparece;
        }
    });
}

const ataqueArribaPokemon = () =>{
    console.log(buscaPokemon);
    pokeConteoAtaque = pokeConteoAtaque - 1;
    if(pokeConteoAtaque < 1){
        pokeConteoAtaque = 0;
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
    fetch(url).then((res) => {
            return res.json();
    }).then((data) => {
        if (data) {
            let pokeAtaque = data.moves[pokeConteoAtaque].move.name;
            document.getElementById("nombreAtaque").innerHTML = pokeAtaque;

            let pokeNivel = data.moves[pokeConteoAtaque].version_group_details[0].level_learned_at;
            document.getElementById("tipoAtaque").innerHTML = pokeNivel;

            let pokeAprende = data.moves[pokeConteoAtaque].version_group_details[0].move_learn_method.name;
            document.getElementById("estadisticasAtaque").innerHTML = pokeAprende;

            let pokeAparece = data.moves[pokeConteoAtaque].version_group_details[0].version_group.name;
            document.getElementById("estatusAtaque").innerHTML = pokeAparece;
        }
    });
}
    


const ataqueAbajoPokemon = () =>{
    console.log(buscaPokemon);
    pokeConteoAtaque = pokeConteoAtaque + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
    fetch(url).then((res) => {
            return res.json();
    }).then((data) => {
        if (data) {
            let pokeAtaque = data.moves[pokeConteoAtaque].move.name;
            document.getElementById("nombreAtaque").innerHTML = pokeAtaque;

            let pokeNivel = data.moves[pokeConteoAtaque].version_group_details[0].level_learned_at;
            document.getElementById("tipoAtaque").innerHTML = pokeNivel;

            let pokeAprende = data.moves[pokeConteoAtaque].version_group_details[0].move_learn_method.name;
            document.getElementById("estadisticasAtaque").innerHTML = pokeAprende;

            let pokeAparece = data.moves[pokeConteoAtaque].version_group_details[0].version_group.name;
            document.getElementById("estatusAtaque").innerHTML = pokeAparece;
        }
    });
}

const reversePokemon = () => {
    if (pokeConteoShiny == 0 && pokeConteoReverse == 0 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 1;
    }

    else if (pokeConteoShiny == 0 && pokeConteoReverse == 1 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 0;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 0 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_shiny;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 1;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 1 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_shiny;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 0;
    }

    if (pokeConteoShiny == 0 && pokeConteoReverse == 0 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.back_default;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 1;
    }

    else if (pokeConteoShiny == 0 && pokeConteoReverse == 1 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.front_default;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 0;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 0 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_shiny_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.back_shiny;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 1;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 1 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_shiny_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.front_shiny;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoReverse = 0;
    }
}



const shinyPokemon = () => {
    if (pokeConteoShiny == 0 && pokeConteoReverse == 0 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_shiny;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 1;
    }

    else if (pokeConteoShiny == 0 && pokeConteoReverse == 1 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_shiny;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 1;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 0 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 0;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 1 && pokeConteoGender == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 0;
    }

    if (pokeConteoShiny == 0 && pokeConteoReverse == 0 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_shiny_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.front_shiny;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 1;
    }

    else if (pokeConteoShiny == 0 && pokeConteoReverse == 1 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_shiny_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.back_shiny;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 1;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 0 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.front_default;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 0;
    }

    else if (pokeConteoShiny == 1 && pokeConteoReverse == 1 && pokeConteoGender == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.back_default;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoShiny = 0;
    }

}

const genderPokemon = () => {
    if (pokeConteoReverse == 0 && pokeConteoGender == 0 && pokeConteoShiny == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.front_default;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 1;
    }

    else if (pokeConteoReverse == 1 && pokeConteoGender == 0 && pokeConteoShiny == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.back_default;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 1;
    }

    else if (pokeConteoReverse == 0 && pokeConteoGender == 1 && pokeConteoShiny == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 0;
    }

    else if (pokeConteoReverse == 1 && pokeConteoGender == 1 && pokeConteoShiny == 0){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 0;
    }

    if (pokeConteoReverse == 0 && pokeConteoGender == 0 && pokeConteoShiny == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_shiny_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.front_shiny;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 1;
    }

    else if (pokeConteoReverse == 1 && pokeConteoGender == 0 && pokeConteoShiny == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_shiny_female;
                if(pokeImg == null){
                    pokeImg=data.sprites.back_shiny;
                }
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 1;
    }

    else if (pokeConteoReverse == 0 && pokeConteoGender == 1 && pokeConteoShiny == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_shiny;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 0;
    }

    else if (pokeConteoReverse == 1 && pokeConteoGender == 1 && pokeConteoShiny == 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./Imágenes/pokebola.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.back_shiny;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
        pokeConteoGender = 0;
    }
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImagen");
    pokePhoto.src = url;
}

const pokeEvo1 = (url) => {
    const pokePhotoEvo1 = document.getElementById("evolucion1");
    pokePhotoEvo1.src = url;
}

const pokeEvo2 = (url) => {
    const pokePhotoEvo2 = document.getElementById("evolucion2");
    pokePhotoEvo2.src = url;
}

const pokeEvo3 = (url) => {
    const pokePhotoEvo3 = document.getElementById("evolucion3");
    pokePhotoEvo3.src = url;
}