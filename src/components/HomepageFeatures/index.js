import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Install LaTeX Locally is designed to be easy to use. You can install LaTeX on your computer in just 10 minutes.
      </>
    ),
  },
  {
    title: 'Minimalistic',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        It contains only the necessary information to install LaTeX on your computer. No unnecessary information.
      </>
    ),
  },
  {
    title: 'Video Tutorial',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        It also contains a video tutorial to help you install LaTeX on your computer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
