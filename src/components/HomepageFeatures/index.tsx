import React from "react";
import clsx from "clsx";
import { GiftIcon, MapIcon, SparklesIcon } from '@heroicons/react/24/outline';

const FeatureList = [
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

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("flex flex-col items-center text-primary bg-base-100 py-8")}>
      <div className="gap-3">
        <Svg className="w-16 h-16 m-4" alt={title} />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-base-content">{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="w-full py-4 px-2">
      <div className="container max-w-7xl ">
        <div className="flex flex-col lg:flex-row w-full h-full justify-between items-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
