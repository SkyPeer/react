import React, {Component} from 'react';
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    };
    render()
    {
        const articlesList = this.state.reverted ? articles.reverse() : articles;
        console.log('-----', '2', this.state, articles.map(article => article.id));
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App Name
                        <button className="btn" onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={articlesList}/>
            </div>
        )
    }
    revert = () => {
        console.log('-----', '1');
        this.setState({reverted: !this.state.reverted})
    }

};


export default App;
