import articleListStyle from "../styles/ArticleList.module.css"

const ArticleList = ({articles}) => {
    return(<div className={articleListStyle.grid}>
      {articles.map(article=><h3 className={articleListStyle.card}>{article.title}</h3>)}  
    </div>)
}

export default ArticleList