import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Murillo N. Prado" />
      <p className="title">Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="/src/Archive/Curriculo03.pdf"
        className="btn"
        download="Curriculo03.pdf"
        type="application/pdf"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
