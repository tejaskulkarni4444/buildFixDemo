import React, {Component} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios'

class HomePage extends Component {
  componentWillMount(){
    axios.get('/services').then(res =>{
      console.log(res)
    })
    // axios.get(`https://5ecd617f7c528e00167cd462.mockapi.io/services`)
    // .then(res => {
    //   if(res){
    //     console.log(res)
    //       // this.setState(state => { 
    //       //     state.serviceList.data = res.data
    //       //     return state
    //       // },()=> console.log(this.state.serviceList))
    //   }
    // })
  }
  // componentDidMount(){
  //   axios.get(`https://5ecd617f7c528e00167cd462.mockapi.io/services`)
  // .then(res => {
  //   if(res){
  //     console.log(res)
  //       // this.setState(state => { 
  //       //     state.serviceList.data = res.data
  //       //     return state
  //       // },()=> console.log(this.state.serviceList))
  //   }
  // })
  // }

  // getData () {
  //   axios.get(`https://5ecd617f7c528e00167cd462.mockapi.io/services`)
  // .then(res => {
  //   if(res){
  //     console.log(res)
  //       // this.setState(state => { 
  //       //     state.serviceList.data = res.data
  //       //     return state
  //       // },()=> console.log(this.state.serviceList))
  //   }
  // })
  // }

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - React Starter Kit`}</title>
        </Helmet>
      );
    }

    render() {
      return (
        <section className="homePage_wrap">
          {this.head()}
          <div className="hero">
            <div className="content_wrap">
              <h1>
                Your slogan here
              </h1>
              <span className="msg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo, alias animi iusto neque, sint corrupti? Laudantium, dignissimos id excepturi facilis, facere saepe quasi placeat praesentium ipsa sapiente illo molestiae?
              </span>
              <Link to="/about">
                <span>Learn more</span>
              </Link>
            </div>
            <div className="pageScroll">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="main">
            <div className="spotlights">
              <div className="grid">
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default {
  component: HomePage
};