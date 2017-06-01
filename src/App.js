import React, { Component } from 'react';
import logo from './logo.svg';
import icecream from './icecream.png';
// import IceCream from './IceCream.js';


import './App.css';
import './css/bootstrap.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      showIceCream: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showIceCream: !this.state.showIceCream})
  }

  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <div className="App-header">
          <img src={icecream} className="App-logo" alt="logo" />
          <h2>Sofia</h2>
        </div>
        <p className="App-intro">
          The Ice Cream Queen
        </p>


        <head>

            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="" />

            <title>Foodie adventures in Toronto</title>

            <link href="css/bootstrap.min.css" rel="stylesheet" />

            <link href="css/full-width-pics.css" rel="stylesheet" />

                <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

        </head>

        <body>

            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Navigate the website</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Ice cream</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="image-bg-fluid-height">
                <img className="img-responsive img-center" src={icecream} alt="" />
            </header>

            <section>
            <div>
               <a onClick={this.onClick.bind(this)} href='#'>Click Here</a>
              {this.state.showIceCream && < IceCream / >}
            </div>

            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="section-heading">About me</h1>
                            <p className="lead section-lead">about me</p>
                            <p className="section-paragraph"> here</p>
                        </div>
                    </div>
                </div>
            </section>

            <aside className="image-bg-fixed-height"></aside>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="section-heading">Ice cream</h1>
                            <p className="lead section-lead">More </p>
                            <p className="section-paragraph">check my ice cream adventures</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright</p>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="js/jquery.js"></script>

            <script src="js/bootstrap.min.js"></script>

        </body>


      </div>
    );
  }
}

export default App;

class IceCream extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>I'm Ice Cream</div>
    )
  }
}
