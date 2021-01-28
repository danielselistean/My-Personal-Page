
class About {
    constructor(appDOM){
        this.appDOM = appDOM;
    }

    render(){
        const aboutDOM = document.createElement('div');
        aboutDOM.classList.add('about-page');
        aboutDOM.innerHTML =`<div class = 'om-tata'>
                                <h2>Om, sot și tată</h2>
                                <div class = 'om-tata-picture'></div>

                                <div class = 'om-tata-text'>
                                    <p>Lucrarea de a face căminul fericit nu îi revine doar mamei. Și tații au o parte foarte importantă. Soțul este cel care unește laolaltă comorile căminului, prin afecțiunea sa puternică, serioasă și devotată, legându-i pe membrii familiei — mamă și copii împreună — în cea mai puternică legătură a unirii.Soțul și tatăl este capul familiei. Soția caută la el iubire, înțelegere și ajutor în educarea copiilor și el trebuie să fie în egală măsură implicat in cresterea lor. Copiii caută la tatăl lor sprijin și îndrumare. El trebuie să aibă o concepție corectă despre viață și să fie conștient de influențele care sunt asupra familiei sale. Mai presus de orice, el trebuie să fie stăpânit de dragoste și de frică de Dumnezeu, învățându-i pe copii sa duca o viata dreapata. Tatăl trebuie să-și facă partea pentru fericirea căminului său. Oricâte griji și necazuri ar avea cu lucrul său, el nu trebuie să îngăduie ca acestea să-i umbrească familia; el trebuie să vină acasă cu zâmbetul pe buze și cu cuvinte plăcute. </p>
                                </div>
                                <div class ='om-tata-pictures'>
                                    <div class='picture1'></div>
                                    <div class='picture2'></div>
                                    <div class='picture3'></div>
                                    <div class='picture4'></div>
                                    <div class='picture5'></div>
                                    <div class='picture6'></div>
                                </div>
                             </div>

                             <div class = 'bucatar'>
                                <h2>Bucătar</h2>
                                <div class = 'bucatar-picture'></div>

                                <div class = 'bucatar-text'>
                                    <p>A fi bucătar, astăzi, nu înseamnă numai a face o meserie, ci a împleti tehnici foarte exacte cu inspirația artistică. Un bun bucătar este întotdeauna un artist.Latura creativă, artistică a meseriei este astăzi mult mediatizată.Așadar, a fi bucătar înseamnă a fi și artist. Prima condiție pentru a fi bucătar este pasiunea. A face meseria de bucătar nu este doar o sarcină tehnică și schematică reductibilă la efectuarea întocmai a unor rețete, ci și plăcerea de a atinge materia primă, ingredientele, de a le curăța, tăia, tranșa, pregăti, gusta, mirosi, prezenta. A fi bucătar mai înseamnă și să cunoști foarte bine și să respecți permanent normele igienico sanitare specifice , să organizezi bucătăria sau propriul post de lucru, să organizezi magaziile și depozitele și să-ți planifici activitatea.

                                    A fi bucătar mai înseamnă și să-ți cultivi curiozitatea față de cunoștințele de a lucra pentru a-l satisface pe client.</p>
                                </div>
                                <div class ='bucatar-pictures'>
                                    <div class='picture01'></div>
                                    <div class='picture02'></div>
                                    <div class='picture03'></div>
                                    <div class='picture04'></div>
                                    <div class='picture05'></div>
                                    <div class='picture06'></div>
                                </div>
                             </div>

                             <div class = 'student-it'>
                                <h2>Student - Școala informală de IT</h2>
                                <div class = 'student-it-picture'></div>

                                <div class = 'student-it-text'>
                                    <p>Cea mai ambiţioasă platformă de educație non-formală și reconversie profesională din România, lider în domeniul educației alternative, Școala informală de IT este locul unde viața oamenilor se schimbă în bine.Fiind înființată ca o metodă alternativă robustă de educație, ca o șansă la un nou început, pentru oamenii care doresc să se  reinventeze profesional și să evolueze personal, să facă o schimbare în carieră.

                                    La Școala informală de IT, oamenii au parte de informatii tehnice, dar mai ales de o experiență aparte, prin metodele alternative de predare, într-un mix training – coaching – mentorat, unde se învață și se evaluează pe bune, pentru o carieră în IT, nu pentru diplome de hârtie.</p>
                                </div>
                                
                             </div>`

        this.appDOM.appendChild(aboutDOM);
    }
}

export {About}