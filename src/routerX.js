import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
  
const articles = [
    {id: '1', author: '.....', title: '....'},
    {id: '2', author: '.....', title: '....'},
    {id: '3', author: '.....', title: '.....'},
    {id: '4', author: '.....', title: '.....'}
];

const routerX = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Main />
    </div>
    </BrowserRouter>
);
const Header = () => (
    <div id="header">
        <nav>
            <ul>
                <li><Link to='/'>Images</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/about'>About us</Link></li>
            </ul>
        </nav>
    </div>
);
const Main = () => (
    <div id="main">
        <Switch>
            <Route exact path='/images' component={Images}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/about' component={About}/>
        </Switch>
    </div>
);
const Images =() =>(
     <div>

     </div>

);
    const Articles = () => (
    <div>
        <h2>Our articles: </h2>
        <ul>
            {
                articles.map(a => (
                    <li key={a.number}>
                        <Link to={`/articles/${a.id}`}>{a.author}>{a.title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);
const About  = () => (
    <div>
        <h2>Who are we</h2>
        <p>We are a small company that give you an overview of super exciting places you can visit</p>
    </div>
);
const ArticlesDetails = (props) => {
    const articlesFiltered = articles.filter((a)=>a.id === props.match.params.id, 10);
    const article = (articlesFiltered.length > 0)?articlesFiltered[0]:null;
    if (!article) {
        return <div>Sorry, but the article {props.match.params.id} was not found</div>
    }
    return (
        <div>
            <h2>Article details:</h2>
            <h3>(#{article.id})</h3>
            <h3>Price: {article.Images}</h3>
        </div>
    );
}
componentWillReceiveProps =(nextProps)=>{
    this.setState({article:nextProps.article});
}
class App extends Component {
   
   render() {
      return (
        <div>
        <div id="showDetails">
        <Switch>
            {/*Here we need to make a work-around since we need the props object (it holds the id from the path) and this is the only way i found to keep the path and add aditional props (eg: articles). Route prop are passed to the component props with object destructuring {...props}*/}
            <Route path='/articles/:id' render={(props)=>{
                console.log("ID INSIDE ROUTE RENDER: "+props.match.params.id);
                const articles = this.state.articles;
                const filtered = articles.filter(a=>a.id === props.match.params.id)[0];
                console.log('filtered is: ');console.log(filtered);
                const article = (filtered)?filtered:{id:'',title:'',url:'',img:''};
                return(
                    <ArticlesDetails {...props} article= {article}/>
                );
            }}/>

            {/*<Route path='/articles/:id' component={ArticleDetail} articles="heyho"/>*/}
        </Switch>
    </div>
      </div>
    );
    }
    
  }
export default routerX;
