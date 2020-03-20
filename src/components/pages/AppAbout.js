import React,{Component} from "react";
export default class AppAbout extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  getDataList(){
//   axios
//     .get()
//     .then((result) => {

//     }).catch((err) => {

//     });
  }
  render(){
    return(
      <>
        <section className="page-container">
          <h2>这是About组件</h2>
        </section>
      </>
    )
  }
}