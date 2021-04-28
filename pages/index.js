import Head from 'next/head'
import ArticleList from "../components/Article"
export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Divyum</title>
        <meta name="keywords" content="web developement, programming"/>
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=6`)
  const articles = await res.json()
  return {
    props : {
      articles
    }
  }
}