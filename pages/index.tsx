import React, { FC } from "react";
import { Button, Footer, HeaderNav } from "@components";
import HappySeb from "@images/seb/happy-seb-head.svg";
import SSSSOnDiscord from "@images/landing-page/ssss-on-discord.svg";
import Link from "next/link";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  return (
    <div className="page landing-page">
      <HeaderNav />
      <main>
        <header className="container hero">
          <p>Welcome to the</p>
          <h1>Software Systems Student Society Sanity Studio</h1>
          <img src={HappySeb.src} alt="Happy Seb, the SSSS mascot" />
        </header>
        <article className="container discover-ssss">
          <header>
            <h2>Discover the SSSS</h2>
            <Button label="Learn more" type="secondary" />
          </header>
          <a
            className="discover-ssss__main-link-item"
            href="https://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems.html"
            rel="noreferrer"
            target="_blank"
          >
            <h3>Learn About Software Systems</h3>
            <p>About the program</p>
          </a>

          <section className="discover-ssss__link-items">
            <Link href="/blog" className="discover-ssss__link-item">
              <h3>Blog</h3>
              <p>Check out SSSS Blog</p>
            </Link>
            <Link
              href="/studio"
              target="_blank"
              rel="noreferrel"
              className="discover-ssss__link-item"
            >
              <h3>Studio</h3>
              <p>Go to Sanity Studio</p>
            </Link>
          </section>
        </article>
        <article className="container discord-banner">
          <div className="banner">
            <img src={SSSSOnDiscord.src} alt="SSSS on Discord" />
            <h2>We’re on Discord!</h2>
            <div className="status-tags">
              <div className="status-tag">Join other SoSy Students</div>
              <div className="status-tag">Home of Many SSSS Events</div>
            </div>
            <p>
              Connect with other Software Systems students and get instant
              notifications about events, news, and more!
            </p>
            <a
              href="https://discord.com/invite/whdfmJbVF7"
              target="_blank"
              rel="noreferrer"
            >
              <Button label="Join the SSSS Discord server" type="secondary" />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
