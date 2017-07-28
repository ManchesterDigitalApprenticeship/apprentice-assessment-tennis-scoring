(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.tpl.html',
    '<h1>Tennis game</h1>\n' +
    '<div style="margin-top:50px">\n' +
    '  <div>\n' +
    '    <button class="btn" id="newGame" ng-click="newGame()">New Game</button>\n' +
    '  </div>\n' +
    '  <div style="margin-top:50px">\n' +
    '    <label>{{scoreText}}</label>\n' +
    '  </div>\n' +
    '  <div style="margin-top:20px" ng-show="showButtons">\n' +
    '    <button class="btn" id="scorePlayer1" ng-click="scorePlayer1()">Player 1 Score</button>\n' +
    '    <button class="btn" id="scorePlayer2" ng-click="scorePlayer2()">Player 2 Score</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();
