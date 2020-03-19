import React from 'react';
import AppHome from './components/pages/AppHome'
import BasicNavigator from './components/basic/BasicNavigatior'
import BasicFooter from './components/basic/BasicFooter'
import BasicButton from './components/basic/BasicButton'
// import BasicInput from './components/basic/BasicInput'
import BasicSwiper from "./components/basic/BasicSwiper";
function App() {
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
  return (
    <>
      <BasicSwiper list={list} />
      {/* <BasicInput /> */}
      <BasicButton />
      <BasicNavigator />
      <AppHome />
      <BasicFooter />
      
    </>
  );
}
export default App;
