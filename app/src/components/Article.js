import React, {Component} from 'react';

class Article extends Component {
    constructor(props){
    super(props)

        this.state = {
        isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }


    /*state = {
        isOpen: true
    }; */

    render() {
        // console.log('THIS:', this);
        const {article} = this.props;
        const style = {width: '50%'};
        console.log('----- Article Props', this.props);
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
        return (
            <div className="card mx-auto" style = {style}>
                <div className="card-header">
                <h2>
                    {article.title}
                    <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="text-capitalize text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>

                </div>
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

