import React,{Component} from "react";
// import {Link} from 'react-router-dom'
import BasicSwiper from '../basic/BasicSwiper'
// import axios from '../../plugins/axios'
let list = [
  {
    name:"",
    id:"",
    cover_image:"https://img.17k.com/cmsimg/recommend/2020/01/1580100714.7272.jpg"
  },
  {
    name:"",
    id:"",
    cover_image:"https://img.17k.com/cmsimg/recommend/2019/12/1576464379.9189.jpg"
  },
  {
    name:"",
    id:"",
    cover_image:"https://img.17k.com/cmsimg/recommend/2020/03/1584244043.1108.jpg"
  },
  {
    name:"",
    id:"",
    cover_image:"https://img.17k.com/cmsimg/recommend/2020/01/1579418206.1271.jpg"
  },
  {
    name:"",
    id:"",
    cover_image:"https://img.17k.com/cmsimg/recommend/2019/11/1573439268.6887.jpg"
  },
]
export default class AppHome extends Component{
  constructor(props){
    super(props)
    this.state = {
      bannerList:[],
      
    }
  }
  componentWillMount(){
    this.setState({
      bannerList:list
    })
    /* axios
      .get('/api/qqxs/home')
      .then(result=>{
        console.log(result)
      })
      .catch(console.error()) */
  }
  componentWillUpdate(){}
  shouldComponentUpdate(){}
  render(){
    return(
      <>
        <section className="home-banner">
          <BasicSwiper list={this.state.bannerList}></BasicSwiper>
        </section>
        <section className="homme-recomment">
          <h2>热门推荐</h2>
          
          <ul>
            <li>001:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>002:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>003:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>004:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>005:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>006:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>007:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>008:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>009:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
            <li>010:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni amet cupiditate.</li>
          </ul>
        </section>
      </>
    )
  }
}