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
        <p>
Hello, my name is Patrick Jolo Macapagal. You can call me PJ. I like traveling. My recent trip was when we went to nueva vizcaya and we went to the falls. My favorite and my comfort food is kare kare! I don’t have a favorite music. It depends on my mood when I listen to music. I like making videos about my travels for memories.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}