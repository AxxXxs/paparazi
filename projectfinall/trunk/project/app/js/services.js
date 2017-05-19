/**
 * Created by lanou3g on 17/4/21.
 */
var servicesModule = angular.module("services",[]);
servicesModule.provider("facService",function(){
    this.config = "斌哥";
    this.setconfig = function(data){
        this.config = data;
    };
    //必须通过 $get方法返回一个服务对象
    this.$get = function(){
        var that = this;
        //就是factory模型的return值
        return {
            name:"斌哥",
            sayHi:function(){
                console.log(this.name+"你真"+that.config);
            }
        };
    }
});