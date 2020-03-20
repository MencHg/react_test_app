export default class Loading{
  constructor(model){
      this.model = model ? model : "default";
      this.el = document.createElement('section');
      this.item = null;
      this.$data = {
          default:{
              ele_tag:`<i class="loadding-item default"></i>`
          },
          pellets:{
              ele_tag:`
              <i class="loadding-item pellets">
                  <i class="pellets"></i>
                  <i class="pellets"></i>
                  <i class="pellets"></i>
                  <i class="pellets"></i>
                  <i class="pellets"></i>
              </i>
              `
          },
          soundbyte:{
              ele_tag:`
              <i class="loadding-item soundbyte">
                  <i class="soundbyte"></i>
                  <i class="soundbyte"></i>
                  <i class="soundbyte"></i>
                  <i class="soundbyte"></i>
                  <i class="soundbyte"></i>
                  <i class="soundbyte"></i>
              </i>`
          },
          ray:{
              ele_tag:`<i class="loadding-item ray">
                  <i class="ray"></i>
              </i>`
          }
      };
      this.init();
  }
  setModel(){
      if(this.$data[this.model]){
          this.el.innerHTML = this.$data[this.model].ele_tag;
      }else{
          throw console.error('Error:model', {"tips":"传入模式参数不正确","options":"null default pellets ray soundbyte"},);
      }
  };
  init(){
      this.setModel();
      this.el.id = "loadding";
      document.body.appendChild(this.el);
      this.item = document.getElementById('loadding');
  };
  open(){
      this.item.classList.add("loadding-show");
  };
  close(){
      this.item.classList.remove("loadding-show");
  };
};