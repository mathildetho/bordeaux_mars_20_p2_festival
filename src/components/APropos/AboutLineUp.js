import React from 'react';
import AboutCard from './AboutCard';

import ben from '../../img/benoit.jpg';
import thom from '../../img/thomas.png';
import math from '../../img/mathilde.jpg';

const AboutLineUp = () => {
    const desc1 = 'Joueur de triangle pour l’orchestre  National de Roumanie de 1997 à 2002.';
    const desc2 = 'Passionnée par le design et le web, c\'est tout naturellement qu\'elle se tourne vers le développement web.';
    const desc3 = 'Après avoir assisté à un concert de Chantal Goya à l\'âge de 28 ans, Thomas décide de consacrer sa vie à la musique et au développement web.'

    const link1 = 'https://www.linkedin.com/in/benoitgrand/';
    const link2 = 'https://www.linkedin.com/in/mathilde-thoraninth/';
    const link3 = 'https://www.linkedin.com/in/thomas-lachieze/'

    return(
        <div className='aboutcard' >
            <h3>La line-up</h3>
            <div className='cards lineup' >
                <AboutCard 
                    imgsrc={ben} 
                    title='Benoit' 
                    desc={desc1}
                    link={link1}
                    />
                <AboutCard 
                    imgsrc={math} 
                    title='Mathilde'
                    desc={desc2}
                    link={link2}
                    />
                <AboutCard 
                    imgsrc={thom}
                    title='Thomas'
                    desc={desc3}
                    link={link3}
                    />
            </div>
        </div>
    )
}

export default AboutLineUp;