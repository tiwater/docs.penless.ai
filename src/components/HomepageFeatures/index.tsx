import React from "react";
import clsx from "clsx";
import { GiftIcon, MapIcon, SparklesIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Experiment",
    Svg: SparklesIcon,
    description: (
      <>
        Play with a set of easy tools. Define your style.
      </>
    ),
  },
  {
    title: "Compose Workflow",
    Svg: MapIcon,
    description: (
      <>
        Compose your pipeline as a unique workflow.
      </>
    ),
  },
  {
    title: "Share to Earn",
    Svg: GiftIcon,
    description: (
      <>
        Share your workflow. Get paid when others use it.
      </>
    ),
  },
];
function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
