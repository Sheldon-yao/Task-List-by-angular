/**
 * Created by 逍遥就是帅 on 2016/11/13.
 */
(function (window) {
  window.angular.module('myApp',[]);

  window.angular.module('myApp')
      .controller('mainController',['$scope', function ($scope) {
        $scope.text="";

        $scope.todoList = [
          {
            text:'学习React基础',
            done:false
          },
          {
            text:'了解最新版Bootstrap特性',
            done:true
          }
      ];
        $scope.add= function () {
          var text = $scope.text.trim();
          if(text){//排除没有内容的提交
            $scope.todoList.push({
              text:text,
              done:false
            });
            $scope.text= "";
          }
        }
        //delete
        $scope.delete = function (todo) {
          var index = $scope.todoList.indexOf(todo);
          $scope.todoList.splice(index,1);//remove
        };
        //已经完成的个数
        $scope.doneCount = function () {
        var temp =   $scope.todoList.filter(function (item) {
            return item.done;//返回true表示当前的item满足条件
          });
          return temp.length;
        };
      }]);
})(window);