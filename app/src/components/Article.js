import React, {PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props){
    super(props);

        this.state = {
       // isOpen: props.defaultOpen,
            count: 0
        }
    }
/*
    shouldComponentUpdate(nextProps, nextState){
        return this.state.isOpen !== nextState.isOpen
    }
*/

    componentWillMount() {
     //   console.log('---', 'mounting')
    }
/*
    componentWillReceiveProps(nextProps){
     //   console.log('-----','will ReceiveProps')
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }
*/
    componentWillUpdate() {
     //   console.log('-----','will update')
    }

    /*state = {
        isOpen: true
    }; */

    render() {
        // console.log('THIS:', this);
        const {article, isOpen, onButtonClick} = this.props;
        const style = {width: '50%'};
    //    console.log('----- Article Props', this.props);
        const body = isOpen && <section className="card-text">{article.text}</section>;
        console.log('isOpen: ',isOpen);
        return (
            <div className="card mx-auto" style = {style}>
                <div className="card-header">
                <h2 onClick = {this.incrementCounter}>
                    {article.title}
                    clicked {this.state.count}
                    <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                        {isOpen ? 'close' : 'open'}
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

        incrementCounter = () => {
            this.setState({
                count:this.state.count + 1
            })
        };

        handleClick = () => {
          //  console.log('------', 'clicked');
         /*
         this.setState({
                isOpen: !this.state.isOpen
            })
            */
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

