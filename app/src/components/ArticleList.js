import React from 'react';
import Article from './Article'

export default function ArticleList({ articles }) {
    const articleElements = articles.map(article =>
        <li key = {article.id} class="li fromArticleList.js"><Article article = {article}/></li>
    );
        return (
            <ul class="fromArticleList.js">
        {articleElements}
            </ul>
    )
}