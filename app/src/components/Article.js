import React, {Component} from 'react';

class Article extends Component {
    state = {
        isOpen: true
    };

    render() {
        // console.log('THIS:', this);
        const {article} = this.props;
        console.log('----- Article Props', this.props);
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div className='hello' style={{color: 'green'}}>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>close</button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                    </div>
                )
        }
/*
        handleClick = function () {
            console.log('------', 'clicked');
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
*/

        handleClick = () => {
            console.log('------', 'clicked');
            this.setState({
                isOpen: !this.state.isOpen
            })
        };
        /*
        handleClick = function () {
            console.log('------', 'clicked');
            return this.setState({isOpen: !this.state.isOpen})
        }
        */

}
/*
function Article(props){
    const {article} =props;
    console.log('----- Article Props', props);
    const body = <section>{article.text}</section>;
    return (
        <div className ='hello' style={{color: 'green'}}>
            <h2>
                {article.title}
                <button onClick={handleClick}>close</button>
            </h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
}*/


export default Article;

