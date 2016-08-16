"use strict";angular.module("shopheroesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/worker.html",controller:"WorkerCtrl",controllerAs:"wc"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("shopheroesApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("shopheroesApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("shopheroesApp").controller("WorkerCtrl",["$scope","workerStructure",function(a,b){a.workerStructure=b,a.tier1Workers=_.filter(b.workers,{tier:1}),a.tier2Workers=_.filter(b.workers,{tier:2}),a.tier3Workers=_.filter(b.workers,{tier:3}),a.tierxWorkers=_.filter(b.workers,function(a){return a.tier>3}),a.workersTier1=new Array(6),a.workersTier2=new Array(6),a.workersTier3=new Array(6),a.workersTierx=new Array(6),a.isSpecSelected=function(c){var d=_.concat(a.workersTier1,a.workersTier2,a.workersTier3,a.workersTierx);return _.chain(b.workers).zip(d).filter(function(a){return a[1]}).flatMap(function(a){return a[0].specializations}).find({name:c.name}).value()},a.selectedWorkers=function(){var c=_.concat(a.workersTier1,a.workersTier2,a.workersTier3,a.workersTierx);return _.chain(b.workers).zip(c).filter(function(a){return a[1]}).map(function(a){return a[0]}).flatten().value()},a.showPoints=function(a,b){return _.find(a.specializations,{name:b.name})},a.getSpecPoints=function(b){return _.sumBy(a.selectedWorkers(),function(a){return a.points[b.name]})},a.changePoints=function(a,b,c){a.points[b.name]=Number(a.points[b.name])+Number(c)},a.getPoints=function(a){var b=0,c=0,d=0;return 1===a.tier?(b=10,c=1,d=5):2===a.tier?(b=20,c=7,d=7):3===a.tier?(b=60,c=15,d=10):4===a.tier?(b=100,c=25,d=12):5===a.tier&&(b=13,c=0,d=15),b+c+d*(a.level-1)},a.pointsToSpend=function(b){var c=0;return _.forEach(b.specializations,function(a){c+=Number(b.points[a.name])}),a.getPoints(b)-c}}]),angular.module("shopheroesApp").factory("workerStructure",function(){var a=this;a.specializations={armor:{name:"Armor Crafting",img:"armor.png"},metal:{name:"Metal Working",img:"metal.png"},weapon:{name:"Weapon Crafting",img:"weapon.png"},wood:{name:"Wood Working",img:"wood.png"},alchemy:{name:"Alchemy",img:"alchemy.png"},textile:{name:"Textile Working",img:"textile.png"},arts:{name:"Arts & Crafts",img:"arts.png"},tinkering:{name:"Tinkering",img:"tinkering.png"},magic:{name:"Magic",img:"magic.png"},rune:{name:"Rune Writing",img:"rune.png"},jewelry:{name:"Jewelry",img:"jewelry.png"},mastery:{name:"Mastery",img:"jewelry.png"}},a.service={specializations:a.specializations};var b=a.service.specializations;return a.workers=[{name:"Robert",title:"Armorer",tier:1,specializations:[b.armor,b.metal],image:"Armorer.png"},{name:"William",title:"Blacksmith",tier:1,specializations:[b.metal,b.weapon],image:"Blacksmith.png"},{name:"John",title:"Carpenter",tier:1,specializations:[b.weapon,b.wood],image:"Carpenter.png"},{name:"Moon",title:"Druid",tier:1,specializations:[b.alchemy,b.wood],image:"Druid.png"},{name:"Jenn",title:"Leatherworker",tier:1,specializations:[b.armor,b.textile],image:"Leatherworker.png"},{name:"Swyft",title:"Tailor",tier:1,specializations:[b.arts,b.textile],image:"Tailor.png"},{name:"Fran",title:"Artificer",tier:2,specializations:[b.armor,b.tinkering],image:"Artificer.png"},{name:"Fladnagton",title:"Enchanter",tier:2,specializations:[b.magic,b.rune],image:"Enchanter.png"},{name:"Marcus",title:"Fletcher",tier:2,specializations:[b.arts,b.weapon],image:"Fletcher.png"},{name:"Ruth",title:"Jeweler",tier:2,specializations:[b.metal,b.jewelry],image:"Jeweler.png"},{name:"Margareth",title:"Luthier",tier:2,specializations:[b.textile,b.wood],image:"Luthier.png"},{name:"Angelina",title:"Sorceress",tier:2,specializations:[b.alchemy,b.magic],image:"Sorceress.png"},{name:"Rosalina",title:"Alchemist",tier:3,specializations:[b.alchemy,b.magic,b.tinkering],image:"Alchemist.png"},{name:"Eleonor",title:"Artisan",tier:3,specializations:[b.arts,b.textile,b.jewelry],image:"Artisan.png"},{name:"Igor",title:"Master",tier:3,specializations:[b.armor,b.metal,b.weapon],image:"Master.png"},{name:"Camilla",title:"Seamstress",tier:3,specializations:[b.armor,b.arts,b.textile],image:"Seamstress.png"},{name:"Anthon",title:"Sculptor",tier:3,specializations:[b.jewelry,b.arts,b.wood],image:"Sculptor.png"},{name:"Christina",title:"Wizard",tier:3,specializations:[b.alchemy,b.magic,b.rune],image:"Wizard.png"},{name:"The Giant",title:"Giant",tier:4,specializations:[b.metal,b.weapon,b.magic,b.rune],image:"Giant.png"},{name:"Jack",title:"Jack",tier:5,specializations:_.without(_.toArray(b),b.mastery),image:"Jack.png"}],_.forEach(a.workers,function(a){a.level=1,a.points={},"Jack"!==a.name&&a.specializations.push(b.mastery),_.forEach(a.specializations,function(b){a.points[b.name]=0})}),a.service.workers=a.workers,a.service}),angular.module("shopheroesApp").directive("worker",function(){return{restrict:"E",templateUrl:"views/workerTemplate.html"}}),angular.module("shopheroesApp").directive("spec",function(){return{restrict:"E",templateUrl:"views/specTemplate.html"}}),angular.module("shopheroesApp").directive("points",function(){return{restrict:"E",templateUrl:"views/pointsTemplate.html"}}),angular.module("shopheroesApp").service("pointsService",function(){}),angular.module("shopheroesApp").directive("miniWorker",function(){return{restrict:"E",template:"<div>{{worker.title}}</div>"}}),angular.module("shopheroesApp").run(["$templateCache",function(a){a.put("views/about.html",'<div> <h2>About</h2> <h5><i>This site aims to help making some decisions in <a href="http://shopheroes.com/">Shop Heroes</a></i></h5> <h5><i>It was created using a lot of information found in the shop heros <a href="http://shop-heroes.wikia.com/">wikia page</a> and the <a href="http://forum.shopheroes.com/">forum</a></i></h5> <h5><i>The site\'s source code can be found on <a href="https://github.com/uzilan/shopheroeshelper">github</a> and is hosted on <a href="https://heroku.com/">heroku</a></i></h5> <img src="images/Shop-Heroes.jpg"> </div>'),a.put("views/pointsTemplate.html",'<!-- worker: {{worker}}, spec: {{spec}} --> <input type="number" name="points" id="points" min="0" max="120" step="1" value="0" style="width: 100%" ng-change="changePoints(worker, spec, this)">'),a.put("views/specTemplate.html",'<div id="specListItem" ng-class="{\'spec-selected\': isSpecSelected(spec)}"> {{spec.name}}<br> <img src="images/skills/{{spec.img}}"> </div>'),a.put("views/worker.html",'<div class="row"> <h2>Workers</h2> <h5><i>Combine different worker groups to see which specializations are covered</i></h5> </div> <div class="row tier1 tier-title"> <div style="display:inline-block"> <button type="button" class="btn btn-default tier-1-collapse-button" ng-click="isCollapsed1 = !isCollapsed1"><i>tier 1</i> <i ng-hide="isCollapsed1" class="fa fa-chevron-up" aria-hidden="true"></i> <i ng-show="isCollapsed1" class="fa fa-chevron-down" aria-hidden="true"></i> </button> </div> <div ng-repeat="worker in tier1Workers track by $index" style="display:inline-block" ng-show="isCollapsed1"> <div class="checkbox worker-checkbox"> <label style="padding-left: 40px"> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTier1[$index]" ng-value="$index"> <x-mini-worker></x-mini-worker> </label> </div> </div> </div> <div class="row tier1" uib-collapse="isCollapsed1"> <div ng-repeat="worker in tier1Workers track by $index" class="col-md-2"> <div class="checkbox worker-checkbox"> <label> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTier1[$index]" ng-value="$index"> <x-worker></x-worker> </label> </div> </div> </div> <div class="row tier2 tier-title"> <div style="display:inline-block"> <button type="button" class="btn btn-default tier-2-collapse-button" ng-click="isCollapsed2 = !isCollapsed2"><i>tier 2</i> <i ng-hide="isCollapsed2" class="fa fa-chevron-up" aria-hidden="true"></i> <i ng-show="isCollapsed2" class="fa fa-chevron-down" aria-hidden="true"></i> </button> </div> <div ng-repeat="worker in tier2Workers track by $index" style="display:inline-block" ng-show="isCollapsed2"> <div class="checkbox worker-checkbox"> <label style="padding-left: 40px"> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTier2[$index]" ng-value="$index"> <x-mini-worker></x-mini-worker> </label> </div> </div> </div> <div class="row tier2" uib-collapse="isCollapsed2"> <div ng-repeat="worker in tier2Workers track by $index" class="col-md-2"> <div class="checkbox worker-checkbox"> <label> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTier2[$index]" ng-value="$index"> <x-worker></x-worker> </label> </div> </div> </div> <div class="row tier3 tier-title"> <div style="display:inline-block"> <button type="button" class="btn btn-default tier-3-collapse-button" ng-click="isCollapsed3 = !isCollapsed3"><i>tier 3</i> <i ng-hide="isCollapsed3" class="fa fa-chevron-up" aria-hidden="true"></i> <i ng-show="isCollapsed3" class="fa fa-chevron-down" aria-hidden="true"></i> </button> </div> <div ng-repeat="worker in tier3Workers track by $index" style="display:inline-block" ng-show="isCollapsed3"> <div class="checkbox worker-checkbox"> <label style="padding-left: 40px"> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTier3[$index]" ng-value="$index"> <x-mini-worker></x-mini-worker> </label> </div> </div> </div> <div class="row tier3" uib-collapse="isCollapsed3"> <div ng-repeat="worker in tier3Workers track by $index" class="col-md-2"> <div class="checkbox worker-checkbox"> <label> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTier3[$index]" ng-value="$index"> <x-worker></x-worker> </label> </div> </div> </div> <div class="row tierx tier-title"> <div style="display:inline-block"> <button type="button" class="btn btn-default tier-x-collapse-button" ng-click="isCollapsedx = !isCollapsedx"><i>tier 4 & 5</i> <i ng-hide="isCollapsedx" class="fa fa-chevron-up" aria-hidden="true"></i> <i ng-show="isCollapsedx" class="fa fa-chevron-down" aria-hidden="true"></i> </button> </div> <div ng-repeat="worker in tierxWorkers track by $index" style="display:inline-block" ng-show="isCollapsedx"> <div class="checkbox worker-checkbox"> <label style="padding-left: 40px"> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTierx[$index]" ng-value="$index"> <x-mini-worker></x-mini-worker> </label> </div> </div> </div> <div class="row tierx" uib-collapse="isCollapsedx"> <div ng-repeat="worker in tierxWorkers track by $index" class="col-md-3"> <div class="checkbox worker-checkbox"> <label> <input type="checkbox" name="worker{{$index}}" ng-model="$parent.workersTierx[$index]" ng-value="$index"> <x-worker></x-worker> </label> </div> </div> </div> <div class="row"> <div class="col-md-12"> <h5><i>Specify every workers level and decide how many points to spend on every skill and mastery</i></h5> </div> </div> <div class="row" style="padding-top: 10px"> <div class="col-md-12"> <table class="table-striped"> <thead> <tr> <th class="vertical-text">Name</th> <th class="vertical-text">Level</th> <th class="vertical-text">Points</th> <th class="vertical-text">Points left</th> <th ng-repeat="spec in workerStructure.specializations" style="width: 150px"> <x-spec></x-spec> </th> </tr> </thead> <tbody> <tr ng-repeat="worker in selectedWorkers() track by $index"> <td>{{worker.title}}</td> <td> <div style="padding-left: 10px"><input type="number" min="1" max="50" ng-model="worker.level" class="level"> </div> </td> <td style="text-align: center">{{getPoints(worker)}}</td> <td style="text-align: center">{{pointsToSpend(worker)}}</td> <td ng-repeat="spec in workerStructure.specializations" ng-class="{gray: $even}"> <div ng-show="showPoints(worker, spec)" style="white-space: nowrap" class="worker-points-div"> <input type="image" ng-click="changePoints(worker, spec, -1)" src="images/minus.png"> <input type="text" class="worker-points" ng-model="worker.points[spec.name]"> <input type="image" ng-click="changePoints(worker, spec, 1)" src="images/plus.png"> </div> </td> </tr> <tr> <td class="totals" colspan="4" style="text-align: left">Totals</td> <td ng-repeat="spec in workerStructure.specializations track by $index" class="totals"> {{getSpecPoints(spec)}} </td> </tr> </tbody> </table> </div> </div> <div style="height: 50px"></div>'),a.put("views/workerTemplate.html",'<div id="workerTemplate"> <h5>{{worker.title}}</h5> <i><b>{{worker.name}}</b></i> <div ng-class="{\'two-columns\': worker.title !== \'Jack\', \'three-columns\': worker.title === \'Jack\'}"> <div> <i> <ul> <li ng-repeat="spec in worker.specializations" style="white-space: nowrap"> {{spec.name}} </li> </ul> </i> </div> <div> <img src="images/workers/{{worker.image}}"> </div> </div> </div>')}]);