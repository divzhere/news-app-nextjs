import ArticleList from "../components/Article"
import {server} from "../config/index"

export default function Home({articles}) {
  return (
    <div>
    <ArticleList articles={articles}></ArticleList>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
      props : {
          articles,
      },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=6`)
//   const articles = await res.json()
//   return {
//     props : {
//       articles
//     }
//   }
// }