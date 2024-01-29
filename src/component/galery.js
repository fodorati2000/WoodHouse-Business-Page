import React, { useEffect, useState } from 'react';
import "./galery.css";


function Galery() {
    const [actualImage, setActualImage] = useState('close.png');
  
    const [display, setDisplay] = useState('none');
    function handleClick(item) {
        setActualImage(item);

    }

    function closeWindow() {
        setDisplay("none");
        setActualImage('close.png');
    }



    useEffect(() => {
        setDisplay(actualImage !== "close.png" ? "flex" : "none");
    }, [actualImage])

    return (
        <div className='odlal'>
            <div className='galerycontent'>

                {
                    require.context('../workImage', false).keys().map((item, index) => {
                        
                        const i = item.replace('./', '');
                        if(i === "close.png"){return 0;}
                        return (
                            <div key={index}>

                                <img src={require("../workImage/" + i)} alt={index} key={index} className='WorkImage' onClick={() => handleClick(i)} />

                            </div>

                        )

                    })

                }

            </div>

            <div className='ClickPanel' style={{ display: display }}>
                <div className='buttons'>
                    <div className='exit'> <img src={require("../img/close.png")} alt="asd" className='exitimage' onClick={closeWindow} /></div>

                </div>
                <img src={require("../workImage/"+actualImage)} alt="fahaz" className="actualImages" />
            </div>
        </div>
    );
}

export default Galery;