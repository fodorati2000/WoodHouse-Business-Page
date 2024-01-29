import React from 'react'
import "./contact.css";
import Footer from "./footer";

function Contact() {
  function submitBrief(e){
    e.preventDefault();
    alert("küldve!");
  }

  return (
    <div className='feel'>  
      <div className='ContactContent'>
        <div className='welcomeText'>
          <h1>
            Köszönjük, hogy felvette velünk a kapcsolatot!</h1>
          <p>


            Kedves Látogatónk,

            Köszönjük, hogy felkereste weboldalunkat és kapcsolatba lépett velünk! Nagyon fontos számunkra, hogy Önnek gyors és hatékony segítséget nyújtsunk.

            Ígérjük, hogy munkatársaink 24 órán belül válaszolnak Önnek. Addig is kérjük, legyen türelemmel, és köszönjük megértését.

            Amennyiben sürgős kérdése van, ne habozzon hívni minket a +36(20) 524 5794 telefonszámon.

            Köszönjük, hogy velünk van, és további szép napot kívánunk!

            Üdvözlettel,

          </p>
          <h1>Profifahaz.hu</h1>
        </div>

        <form className='form' onSubmit={submitBrief}>
          <div className='row1'>
            <input type='text' placeholder='Teljes Név' id='name'/>
            <input type='email' placeholder='E-mail cím' id='email'/>
          </div>

          <input type='tel' placeholder='Telefonszám' id='tel'/>
          <textarea placeholder='Leírás....' id='descript'/>
          <input type='submit' value="Küldés"/>
        </form>
      </div>


      <div className='FooterContact'>
        <Footer />
      </div>


    </div>
  )
}

export default Contact