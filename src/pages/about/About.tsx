import React, { useEffect, useState } from 'react'

import './About.css';
import { loadProfile } from '../../helpers/loadProfile';

export const About = () => {
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    loadProfile().then( data => setProfile(data[0]));
  }, []);
  

  return (
    <div className='row mb-5'>
      <div className="col-sm-12 col-md-6">
        <div className="about-img">
          <img src={ profile.profileImg } alt="..." />
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <h2>I'm { profile.name }</h2>
        <p>
          { profile.aboutMe }
        </p>
      </div>
    </div>
  )
}
