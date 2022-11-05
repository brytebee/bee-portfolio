import React from 'react';
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsFacebook,
} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

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
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
