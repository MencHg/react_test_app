import React,{Component} from "react";
import '../../assets/css/swiper.css';
export default class BasicSwiper extends Component{
  constructor(props){
    super(props)
    this.state = { // 当前组件需要的类名
      classNameList:[
        "slider-leave", //上一张
        "slider-active", //当前显示的
        "slider-enter" //下一张
      ]
    }
  }
  setClassName(nameList){ //更新 classname 的方法
    this.setState({
      classNameList:nameList
    });
  };
  initEleName(){ //初始化的classname 的函数
    let nameList = this.state.classNameList;
    for(let i=0;i<this.props.list.length-3;i++){
      nameList.push('slider-item');
    };
    this.setClassName(nameList)
  };
  privPic(){ // 切换上一张的函数
    let nameList = this.state.classNameList
    nameList.push(nameList[0])
    nameList.shift()
    this.setClassName(nameList)
  }
  nextPic(){ // 切换下一张的函数
    let nameList = this.state.classNameList
    nameList.unshift(nameList[nameList.length-1])
    nameList.pop()
    this.setClassName(nameList)
  }
  componentWillMount(){ //在 render 之前完成类名的初始化操作
    this.initEleName()
  }
  render(){
    let items = []
    for(let i=0;i<this.props.list.length;i++){
      items.push(<li className={this.state.classNameList[i]} key={i} ><img src={this.props.list[i].cover_image} alt=""/></li>);
    }
    return(
      <div className="swiper">
        <button className="swiper-btn swiper-priv" onClick={()=>this.privPic()}>P</button>
        <button className="swiper-btn swiper-next" onClick={()=>this.nextPic()}>N</button>
        <ul className="swiper-list">
          {items}
        </ul> 
      </div>
    )
  }
}