import React, { useEffect, useState } from 'react'
import { loadSocialMedia } from '../../helpers/loadSocialMedia';

export const Footer = () => {

  const [socialMedia, setSocialMedia] = useState<any>({});

  useEffect(() => {
    loadSocialMedia().then( data => setSocialMedia(data[0]));
  }, []);

  return (
    <footer className="text-center">
        <a href={ socialMedia.twitter } target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href={ socialMedia.linkedin } target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={ socialMedia.github } target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={ 'mailto:'+socialMedia.email }>
          <i className="fa-solid fa-envelope"></i>
        </a>
    </footer>
  )
}
