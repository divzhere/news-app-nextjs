import React from 'react'
import Link from "next/link"
import ArticleStyle from "../styles/ArticleList.module.css"
const ArticleItem = ({article}) => {
    return (
       <Link href="/article/[id]" as={`/article/${article.id}`}>
       <a className={ArticleStyle.card}><h3>{article.title}</h3>
       <p>{article.body}</p>
       </a>
       </Link>
    )
}
export default ArticleItem
