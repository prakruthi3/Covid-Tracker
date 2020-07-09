import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataAsync } from './redux/actions/actions';
import { Switch, Route, Redirect } from 'react-router-dom';

import Country from "./pages/countryData";
import Error from './components/ErrorPage';
import Home from './pages/Home';
import LoaderHome from './components/Loader';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  shouldComponentRender() {
    const { isFetching } = this.props;
    if (isFetching === false) {
      return false;
    }
    return true;
  }

  render() {

    

    return (

      
      <input type="checkbox" id="check"/>
      <label htmlFor="check">
        <i className="fa fa-bars" id="btn"></i>
        <i className="fa fa-times" id="cancel"></i>
      </label>
    <div className="sidebar">
      <header><img
              src={image}
              alt="COVID-19"
              style={{ height: 30, width: 30, position: "relative" }}
            /> Covid-19 Tracker</header>
      <ul>
      <li><a href="/"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="/india"><i className="fa fa-map-pin"></i>IndiaLive</a></li>
      <li><a href="/globe"><i className="fa fa-globe"></i>WorldData</a></li>
      <li><a href="/guidelines"><i className="fa fa-info"></i> WHO</a></li>
      {/* <li><a href="/news"><i className="fa fa-newspaper-o"></i>News</a></li> */}
      <li><a href="/news2"><i className="fa fa-newspaper-o"></i>News</a></li>
      
  
      </ul>
    </div>
  
      <div className="App">
        {
          
            <div>
              <div className="Mainheader">
                
                <h1 className="corona">COVID TRACKER</h1>
              </div>
              <Router>
              <Switch>
                <Route path='/country/:countryId' component={Country} />
                <Route exact path='/' component={Home} />
                <Route path="*" render={() => <Redirect to="/" />} />
              </Switch>
              </Router>

              
            </div>
        }
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.country.isFetching,
  errorMessage: state.country.errorMessage,
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDataAsync()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);