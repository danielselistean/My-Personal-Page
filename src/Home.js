
class Home {
    constructor(appDOM) {
        this.appDOM = appDOM;
    }

    render() {
        const homeDOM = document.createElement('div');
        homeDOM.classList.add('home-page');
        homeDOM.innerHTML = `  <div class = 'cafeaua-din-nori'>
                                    <h2>Cafeaua din Nori</h2>
                                    <div class = 'cafeaua-din-nori-picture'></div>

                                    <div class = 'cafeaua-din-nori-text'>
                                        <p><b>Aroma</b> proaspătă de cafea dă întotdeauna savoare unei zile și o îmbracă într-o aură plină de magie și extraordinar. Nu ne putem parca imagina o dimineață care să fie lipsită de această minunăție. Putine lucruri ne incanta pe lumea asta precum cafeaua proaspăt făcută, cu mirosul si aroma ei care ni se impregnează în tot corpul. Ea este substanța vitală care ne da putere încă de la prima oră a dimineții și care ne ajuta sa facem orice ne punem în gând indiferent de temerile, anxietățile și fricile noastre. Cafeaua este un excelent stimulent al sistemului nervos. Si nu doar fiindca ne energizeaza, ci fiindca ne imbunatateste pe termen scurt memoria, atentia si concentrarea. Creierul nostru este in alerta si atent la orice stimul din mediu dupa ce consumam aceasta bautura.
                                        Daca nu ai reusit sa dormi suficient, poti bea o cafea, intrucat aceasta combate temporar consecintele privarii de somn. Asadar, dupa o noapte pierduta, fa-ti o cafea neagra si te vei simti mult mai bine, recapatandu-ti vitalitatea si scapand de starea de somnolenta.
                                        Faciliteaza oxigenarea sangelui si respiratia, dilatand tranctul respirator si permitand patrunderea aerului in plamani. Cafeaua este utilizata de unii specialisti in calmarea simptomelor astmului si altor afectiuni respiratorii similare.
                                        Bogata in antioxidanti, cafeaua sprijina sistemul imunitar in lupta cu radicalii liberi, ne apara de boli si incetineste imbatranirea. Nu este o formula magica pentru tineretea vesnica, dar cu siguranta ne va oferi vitalitate pentru mult, mult timp.</p>
                                    </div>
                                </div>

                                <div class = 'dieta-mediteraneana'>
                                    <h2>Dieta Mediteraneana</h2>
                                    <div class = 'dieta-mediteraneana-picture'></div>

                                    <div class = 'dieta-mediteraneana-text'>
                                        <p><b>Dieta mediteraneană</b> este asociată longevității și unei bune stări de sănătate, în special cardiovasculară. Ea este inspirată de obiceiurile culinare ale locuitorilor din jurul Mării Mediterane, în special de bucătăriile tradiționale din Creta, Italia și Spania, „tradițional” fiind cuvântul-cheie aici. Dieta mediteraneana castiga rapid reputatia de cea mai sanatoasa dieta din lume si este renumita pentru asigurarea sanatatii cardiovasculare si cognitive. Totusi, include si grasimi, lucru ce poate fi descurajant pentru persoanele care doresc sa aiba o alimentatie sanatoasa si care nu stiu sa faca diferenta intre grasimile sanatoase si cele nesanatoase.
                                        
                                        In general, dieta mediteraneana include ulei de masline, fructe, legume, seminte, leguminoase, paine integrala, paste, cereale, consum moderat de peste si vin rosu si consum redus de carne rosie, alimente dulci si prelucrate. In ultima vreme au fost introduse si o portie sau doua de alimente lactate pe zi. Cauza sănătății populatiei din zona mediteraneana a fost identificată ca fiind modul lor de viață activ și regimul bogat în legume, fructe și ulei de măsline.</p>
                                    </div>
                                </div>
                                
                                <div class = 'alimente-alcaline'>
                                    <h2>Alimentele Alcaline</h2>
                                    <div class = 'alimente-alcaline-picture'></div>

                                    <div class = 'alimente-alcaline-text'>
                                        <p><b>Dieta alcalina</b> este ideala pentru persoanele carora le place sa manance mult, pentru ca nu pune accentul pe cantitate, ci pe echilibrul dintre alimentele alcalinizate, care trebuie consumate in proportie de 75%, si cele acide, care trebuie sa reprezinte restul de 25%.
                                         
                                        Majoritatea legumelor si fructelor contin elemente alcaline intr-o proportie mult mai mare decat restul alimentelor, cu mici exceptii in care unele dintre ele ne aprovizioneaza chiar cu acizi „buni”, cum ar fi hreanul, ceapa, usturoiul, orzul, graul spelta. Alte surprize sunt oferite de fructele si legumele pe care din obisnuinta le asociem cu aciditatea sau cu gustul acid. In urma digestiei, chiar fructe acre cum sunt citricele sau legumele, precum rubarba, se descompun in produsi alcalini. Cel mai faimos reprezentant este chiar lamaia, care o data ajunsa in stomac isi schimba pH-ul datorita digestiei si devine alcalina.
                                         
                                        Daca starea de sanatate este buna, atunci odata pe saptamana se poate consuma carne de peste, sau fructe care nu sunt in lista celor alcaline.
                                        Se recomanda reducerea treptata a consumul de paine alba, si inlocuirea ei cu painea integrala, de preferat facuta acasa. 
                                        Alaturi de consumul alimentelor alcaline, sunt indicate si exercitiile fizice, pentru ca sportul ajuta la eliminarea produsilor de metabolism, reducerea stresului oxidativ si  cresterea alcalinitatii sanguine.</p>
                                    </div>
                                </div>`

        this.appDOM.appendChild(homeDOM);
    }
}

export { Home }