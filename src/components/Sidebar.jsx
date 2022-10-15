import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Murillo N. Prado" />
      <p className="title">Full Stack Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="/MyCurriculo.pdf"
        className="btn"
        download="MyCurriculo.pdf"
        type="application/pdf"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
