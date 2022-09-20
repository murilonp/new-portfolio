import '../styles/components/technologiescontainer.sass';

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiGit
} from 'react-icons/di';

import { SiTypescript } from 'react-icons/si';

const technologies = [
  {
    id: 'html',
    name: 'HTML5',
    description: 'Do básico ao avançado com 4 anos mais de experiência.',
    icon: <DiHtml5 />
  },
  {
    id: 'css',
    name: 'CSS3',
    description: 'Do básico ao avançado com 4 anos mais de experiência.',
    icon: <DiCss3 />
  },
  {
    id: 'js',
    name: 'JavaScript',
    description:
      'Do básico ao avançado com 3 anos de experiência(especializando na stack).',
    icon: <DiJsBadge />
  },
  {
    id: 'ts',
    name: 'TypeScript',
    description:
      'Do básico ao avançado com 1 ano de experiência(especializando na stack).',
    icon: <SiTypescript />
  },
  {
    id: 'react',
    name: 'React',
    description: 'Do básico ao intermediário com 8 meses de estudos.',
    icon: <DiReact />
  },
  {
    id: 'node',
    name: 'Node.js',
    description: 'Do básico ao intermediário com 8 meses de estudos.',
    icon: <DiNodejsSmall />
  },
  {
    id: 'mysql',
    name: 'MySQL',
    description: 'Do básico ao avançado com 1 ano de experiência',
    icon: <DiMysql />
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Do básico ao avançado com 1 ano de experiência',
    icon: <DiGit />
  }
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
