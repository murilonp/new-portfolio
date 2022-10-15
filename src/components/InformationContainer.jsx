import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/informationcontainer.sass';

/* const informationContact = [
  { name: 'Telefone', info: '(15)99999-9999', icon: <AiFillPhone /> },
  { name: 'Email', info: 'murilloprado457@gmail.com', icon: <AiOutlineMail /> },
  { name: 'Localização', info: 'Sorocaba/SP', icon: <AiFillEnvironment /> }
]; */

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        {/* {informationContact.map(contact => (
          <div>
            {contact.icon}
            <h3>{contact.name}</h3>
            <p>{contact.info}</p>
          </div>
        ))} */}
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(**)*****-****</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>
            <a ma href="mailto:murilloprado457@gmail.com">
              murilloprado457@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Sorocaba/SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
