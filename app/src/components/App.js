import React, {PureComponent} from 'react';
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
    state = {
        reverted: false
    };



    render()
    {
        console.log('-----', 1);
        /*const articlesList = this.state.reverted ? articles.reverse() : articles;
        console.log('-----', '2', this.state, articles.map(article => article.id)); */
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App Name
                        <button className="btn" onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse(): articles}/>
            </div>
        )
    }
    revert = () => {
        //console.log('-----', '1');
        //this.articles.reverse();
        this.setState({
            reverted: !this.state.reverted
        })
    }

};


export default App;
