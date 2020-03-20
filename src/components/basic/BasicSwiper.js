import React,{Component} from "react";
import '../../assets/css/swiper.css';
export default class BasicSwiper extends Component{
  constructor(props){
    super(props)
    this.timerid = null;
    this.state = { // 当前组件需要的类名
      classNameList:[
        "slider-leave", //上一张
        "slider-active", //当前显示的
        "slider-enter" //下一张
      ]
    }
  }
  swiperAutoPic(){
    this.timerid = setInterval(()=>{
        this.nextPic();
    },5000)
  }
  swiperMouseMove(ev){
    if(ev.type === "mouseleave"){
      // console.log(ev.type,'定时器需要开起来了');
      this.swiperAutoPic();
    }else if(ev.type === "mouseenter"){
      // console.log(ev.type,'定时器需要关起来了');
      clearInterval(this.timerid);
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
  prevPic(){ // 切换上一张的函数
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
      <div className="swiper" onMouseLeave={ev=>this.swiperMouseMove(ev)} onMouseEnter={ev=>this.swiperMouseMove(ev)}>
        <button className="swiper-btn swiper-priv" onClick={()=>this.prevPic()}>P</button>
        <button className="swiper-btn swiper-next" onClick={()=>this.nextPic()}>N</button>
        <ul className="swiper-list">
          {items}
        </ul> 
      </div>
    )
  }
  componentDidMount(){ //初始化完成,可以开启定时器,autoplayer自动切换了
    // console.log('初始化完成,可以开启定时器,autoplayer 了')
    this.swiperAutoPic();
  }
  componentWillUnmount(){
    clearInterval(this.timerid);
    // console.log("这是 swiper 组件卸载的定时器清除函数")
  }
}