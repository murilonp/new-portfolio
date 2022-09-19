import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/murilo-nascimento-473162205/',
    icon: <FaLinkedinIn />
  },
  { name: 'github', link: 'https://github.com/murilonp', icon: <FaGithub /> },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/murilloprado_/',
    icon: <FaInstagram />
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/murilo.prado.73',
    icon: <FaFacebook />
  }
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(networks => (
        <a
          href={networks.link}
          target="_blank"
          className="social-btn"
          id={networks.name}
          key={networks.name}
        >
          {networks.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
