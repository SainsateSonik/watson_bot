import React from 'react';
import './Header.css';
import Image from './Image/Image';

import reactLogo from '../../static/media/images/reactLogo.png';
import watsonLogo from '../../static/media/images/watsonLogo.png';
import firebaseLogo from '../../static/media/images/firebaseLogo.png';

const logos = [ reactLogo, watsonLogo, firebaseLogo];

const header = function() {
    const logoImages =  <div className="logo">
                          {logos.map(logo => <Image img={logo} key={logo}/>)}
                        </div>

    return(
        <header className="header">
          <h1 className="title">React <em>powered with</em> Watson <em>&</em> Firebase</h1>
          {logoImages}
        </header>
    );
};

export default header;