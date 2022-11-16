import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am John Rald.  I'm a grade 6 student of St. Scholastica Academy.  
        My hobbies are playing Roblux, watching youtube videos and playing chess.  
        My favorite food are ramen, maki and my lola's sisig</p>
        <p>Someday I want to be a gasoline boy!</p>        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}