import articleListStyle from "../styles/ArticleList.module.css"
import ArticleItem from "./ArticleItem"
const ArticleList = ({articles}) => {
    return(<div className={articleListStyle.grid}>
      {articles.map(article=><ArticleItem article={article}></ArticleItem>)}  
    </div>)
}

export default ArticleList