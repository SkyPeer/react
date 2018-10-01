import React from 'react';
import Article from '../Article'
import './style.css'

export default function ArticleList({ articles }) {
    const articleElements = articles.map(article =>
        <li key = {article.id} class="li fromArticleList.js" className="article-list__li">
            <Article article = {article}/>
        </li>
    );
    return (
        <ul class="fromArticleList.js">
            {articleElements}
        </ul>
    )
}
