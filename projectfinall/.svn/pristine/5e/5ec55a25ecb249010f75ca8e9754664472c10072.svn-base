/**
 * Created by lanou3g on 17/4/21.
 */
var filtersModule = angular.module("filtersModule",[]);
//自定义筛选条件
filtersModule.filter("unique", function () {
    //给angular返回一个函数地址，angular内部会在你使用该filter2过滤器的时候回调这个函数，参数1：过滤的原字符串，后面依次是筛选条件  {{a|filter2:b:c}}
    return function (source, category) {
        // console.log(category)
        var arr = [];
        if (angular.isArray(source)) {
            angular.forEach(source, function (value) {
                // console.log(value);
                var categoryValue = value[category];
                if (arr.indexOf(categoryValue) == -1) arr.push(categoryValue);
            });
            return arr;
        }
        return source;
    };
});