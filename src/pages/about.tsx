import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  Thank you for visiting my blog!
                </h5>
                <h5>
                If you want to see the source code of the website please visit the <br /> GitHub repo: <a href="https://github.com/mattborghi/violin">mattborghi/violin</a>
                </h5>
                <p>
                  Learning an instrument is not easy and learning the violin is really complicated.
                  It requires a lot of motivation and self-determination. In order to improve and see 
                  real changes, you need to practice frequently and have patience.
                </p>
                <p>
                  The main idea of writing this blog was to inspire myself and others (mainly adults like me)
                  to keep improving or start learning this fantastic instrument. Watching yourself improve along the years
                  is the best way to keep you motivated. Also I starting recording myself regularly 
                  during the pandemics, around June 2020, in order to show my professor the advances during the week.
                  For that reason, I thought that it would be a good idea to share my experiences with others.
                </p>
                <p>
                  When I was around 20 years old, I tried learning violin by myself without previous music background 
                  but I failed miserably. Since I was studying in uni, I didn't have much time
                  and I didn't feel motivated enough.
                  So, after finishing my university studies I started taking classes with a professor 
                  (at the <a href="https://ecmusica.com.ar/" title="ECM">Creative Music School</a> in Vicente Lopez, Buenos Aires, Argentina on July 2018 at 27 years old) 
                  and I think it was one of the best decisions I have ever made. 
                  Although there are some times that it is difficult to have a couple of minutes to practice or even the motivation
                  as I said before, watching the improvements over time made me enjoy more the tedious technique practice sessions
                  even if I wanted to go to sleep or make something else.  
                </p>
                <p>
                  Finally, if you feel like writing to me, just do it! I will answer you as soon as I can. 
                  Anyways, try to make the same as I do to see how much you have progressed since you started learning. You will be surely surprised!
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
