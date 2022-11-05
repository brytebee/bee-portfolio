import React from 'react';
import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const socials = {
  twitter: 'https://twitter.com/brytebee',
  linkedIn: 'https://linkedin.com/in/brytebee',
  github: 'https://github.com/brytebee',
  instagram: 'https://www.instagram.com/bryte_bee',
  facebook: 'https://web.facebook.com/brytebee',
};

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
