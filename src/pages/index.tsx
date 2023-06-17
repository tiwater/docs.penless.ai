import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("flex flex-col bg-base-200 text-base-content w-full h-80 justify-center items-center py-4 gap-6")}>
      <div className="text-5xl font-bold">{siteConfig.title}</div>
      <div className="text-xl">{siteConfig.tagline}</div>
      <div className="">
        <Link
          className="btn btn-outline hover:no-underline btn-lg normal-case bg-primary hover:bg-primary-focus hover:border-primary text-primary-content"
          to="/docs/design/api"
        >
          Quick Start - 5min ⏱️
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { isDarkTheme, siteConfig } = useDocusaurusContext();
  useEffect(() => {
    console.log('isDarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="flex flex-col w-full min-h-full justify-center items-center bg-base-200">
        <HomepageHeader />
        <main className="w-full h-full bg-base-100">
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
