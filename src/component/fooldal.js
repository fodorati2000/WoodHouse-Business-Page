import React from 'react';
import Galery from './galery';
import "./fooldal.css";

import Footer from "./footer";

import firePlace from "../img/fireplace.webp";
import insulution from "../img/insulution.webp";
import Save from "../img/moneySave.webp";
import woodinside from "../img/woodinside.webp";

import FireIcon from "../img/fire.webp";
import Green from "../img/green.webp";

import Energy from "../img/energy.webp";
import GreenEnergy from "../img/green-energy.webp";


import Security from "../img/cyber-security.webp";
import Time from "../img/hourglass.webp";

import save from "../img/salary.webp";
function Fooldal({handleButton}) {
    return (

        <div className='container'>
            <div className='infocontainer'>


                <div className='cella'>
                    <img src={firePlace} alt='firePlace' />
                    <div className='content'>
                        <div className='Title'>
                            <img src={FireIcon} alt='Fire' className='Titleicon' />
                            <h1>Kiváló Hő- És Hangszigetelés</h1>
                            <img src={Green} alt='green' className='Titleicon' />
                        </div>
                        <p className='hidding'>
                            Könnyűszerkezetes otthonok kimagasló hangszigeteléssel rendelkeznek, annak ellenére, hogy falvastagságuk és tömegük kisebb. Ezek a modern házak hatékonyan elszigetelik a külső zajokat, sőt, még repülőtéri zajokat is hatékonyan szűrnek. Az alacsony energiafelhasználású könnyűszerkezetes házak kiváló hőszigetelési rétegekkel és megfelelő ablakokkal rendelkeznek, így az ideális belső hőmérséklet fenntartásához minimális energia szükséges.
                            <br />
                            <br />
                            Az épületekben a lépészaj sem okoz problémát, mivel hatékony megoldásokkal, mint a jól kialakított mennyezetburkolat és a födémek gerendaközeinek szigetelése, valamint száraz vagy nedves (pl. cement-esztrich) eljárással készített úsztatott padlóburkolat, sikeresen elnyelik a kopogó hangokat. Az épületgépészeti szerelvények rugalmas megfogásai és a hangszigetelt burkolat alatti vezetékek továbbá óvják ezek működési zaját.
                            <br />
                            <br />
                            Főfalaink hő átviteli tényezője rendkívül alacsony, U=0,11-0,15 W/m²K, ami messze meghaladja az AA++ minősítésű épületeknél előírt U≤0,24 W/m²K értéket. Ezt a kimagasló hőszigetelést és hangszigetelést egyaránt biztosító szerkezetet modern és fenntartható anyagok felhasználásával érjük el, csökkentve ezzel otthonunk ökológiai lábnyomát és minimalizálva az építési hulladékot.
                        </p>
                        <button className='reszletekButton' onClick={() => handleButton(1)}>Kapcsolat</button>
                    </div>

                </div>


                <div className='cellaL'>

                    <div className='content'>
                        <div className='Title'>
                            <img src={save} alt='Fire' className='Titleicon' />
                            <h1>Alacsonyabb rezsiköltségek</h1>
                        </div>
                        <p className='hidding'>

                            Az optimalizált hőszigetelés révén a ház belső hőmérsékletének fenntartásához szignifikánsan csökkent az energiaszükséglet, lehetővé téve a környezetbarát és költséghatékony fűtési vagy hűtési rendszerek hatékonyabb működését. Ezáltal nemcsak pénzt takaríthatunk meg, hanem csökkenthetjük az energetikai lábnyomunkat is.
                        </p>
                        <button className='reszletekButton' onClick={() => handleButton(1)}>Elérhetőség</button>
                    </div>
                    <img src={insulution} alt='firePlace' />
                </div>

                <div className='cellaL'>
                    <img src={Save} alt='firePlace' />
                    <div className='content'>
                        <div className='Title'>
                            <img src={Energy} alt='Fire' className='Titleicon' />
                            <h1> Energiatakarékosság </h1>
                            <img src={GreenEnergy} alt='Fire' className='Titleicon' />
                        </div>

                        <p className='hidding'>

                            A fokozott hőszigetelésnek, hőtükörnek és hőhíd-mentességnek köszönhetően a könnyűszerkezetes házak lényegesen kevesebb energiát igényelnek, akár fűtésről, akár hűtésről beszélünk.
                            A falak, födémek és szerkezetek nem vezetik és nem nyelik el a hőt, így nem szükséges azokat átfűteni vagy hűteni. Csak a belső légtér hőmérsékletét kell szabályoznunk, ami jelentős energiamegtakarítást eredményez.
                            Az épületfizikai tulajdonságok kiválóak, és jó tájolással és tervezéssel tovább javíthatóak. Házaink tervezése során mindig figyelembe vesszük ezeket a szempontokat.
                            Az alacsony energiaigény miatt nem szükséges nagy beruházással járó, jelentős karbantartást igénylő, nagy energiamennyiségre tervezett berendezések beépítése sem szükséges.

                        </p>
                        <button className='reszletekButton' onClick={() => handleButton(1)}>Részletek</button>
                    </div>


                </div>

                <div className='cellaL'>

                    <div className='content'>
                        <div className='Title'>
                            <img src={Security} alt='Fire' className='Titleicon' />
                            <h1> Biztonságos és időtálló </h1>
                            <img src={Time} alt='Fire' className='Titleicon' />
                        </div>

                        <p className='hidding'>

                            Az erős, de rugalmas fa vázszerkezet kiemelkedő biztonságot nyújt, földrengés esetén például sokkal ellenállóbb a hagyományos épületeknél. Emellett a fa vázszerkezet kiválóan ötvözi az erőt és a hajlékonyságot, biztosítva a stabilitást és az alkalmazkodóképességet.

                            A ház szerkezete kizárólag természetes anyagok felhasználásával épül, első osztályú építő fából. Ez a fa nemcsak erős és rugalmas, de gondosan kezelt is, így ellenáll a gombák, rovarok és más kártevők támadásainak. Ennek köszönhetően a ház hosszú élettartamú és alacsony karbantartási költségekkel rendelkezik.


                        </p>
                        <button className='reszletekButton' onClick={() => handleButton(1)}>Részletek</button>
                    </div>
                    <img src={woodinside} alt='firePlace' />
                </div>
            </div>
            <div>
               { <Galery/>}
            </div>
            <div className='FooterMain'>
               { <Footer/>}
            </div>
        </div>
    )
}

export default Fooldal

