// describe('Bounce down animation', function() {
//   var prefixes = {
//     '-webkit-transform': true,
//     '-moz-transform': true,
//     '-o-transform': true,
//     'transform': true
//   };
//   var transform;
//   beforeEach(module('ngAnimate'));
//   beforeEach(module('ngAnimateMock'));
//   beforeEach(module('fx.animations'));

//   pit("should bounce-down in", function(done) {
//     inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
//       var element = $compile('<div class="fx-bounce-down">bounce-down</div>')($rootScope);
//       $rootElement.append(element);
//       angular.element($document[0].body).append($rootElement);
//       $rootScope.$digest();

//       $animate.enabled(true);
//       $animate.enter(element, $rootElement);
//       $rootScope.$digest();
//       $timeout.flush();
//       $window.setTimeout(function(){
//         angular.forEach(prefixes, function(bool, prefix){
//           if(element.css(prefix)){
//             transform = prefix;
//           }
//         });

//         expect(element.css('opacity')).to.be('1');
//         expect(parseInt(element.css(transform)[7])).to.be.above(0);
//         done();
//       },1000);
//     });
//   });

//   it("should bounce-down out", function(done) {
//     inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
//       var element = $compile('<div class="fx-bounce-down">bounce-down</div>')($rootScope);
//       $rootElement.append(element);
//       angular.element($document[0].body).append($rootElement);
//       $rootScope.$digest();

//       $animate.enabled(true);
//       $animate.leave(element);
//       $rootScope.$digest();
//       $timeout.flush();
//       $window.setTimeout(function(){
//         expect(element.css('opacity')).to.be('0');
//         done();
//       },1000);
//     });
//   });

//   it("should bounce-down move", function(done) {
//     inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
//       var element = $compile('<div class="fx-bounce-down">bounce-down</div>')($rootScope);
//       $rootElement.append(element);
//       angular.element($document[0].body).append($rootElement);
//       $rootScope.$digest();

//       $animate.enabled(true);
//       $animate.move(element, $rootElement);
//       $rootScope.$digest();
//       $timeout.flush();
//       $window.setTimeout(function(){
//         angular.forEach(prefixes, function(bool, prefix){
//           if(element.css(prefix)){
//             transform = prefix;
//           }
//         });
//         expect(element.css('opacity')).to.be('1');
//         expect(parseInt(element.css(transform)[7])).to.be.above(0);
//         done();
//       },500);
//     });
//   });

//   it('should bounce-down removeClass', function(done){
//     inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
//       var element = $compile('<div class="fx-bounce-down ng-hide">bounce-down</div>')($rootScope);
//       $rootElement.append(element);
//       angular.element($document[0].body).append($rootElement);
//       $rootScope.$digest();

//       $animate.enabled(true);
//       $animate.removeClass(element, 'ng-hide');
//       $rootScope.$digest();

//       $window.setTimeout(function(){
//         angular.forEach(prefixes, function(bool, prefix){
//           if(element.css(prefix)){
//             transform = prefix;
//           }
//         });
//         expect(element.css('opacity')).to.be('1');
//         expect(element.css(transform)).to.be('matrix(1, 0, 0, 1, 0, 0)');
//         done();
//       },1000);
//     });
//   });

//   it('should bounce-down addClass', function(done){
//     inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
//       var element = $compile('<div class="fx-bounce-down">bounce-down</div>')($rootScope);
//       $rootElement.append(element);
//       angular.element($document[0].body).append($rootElement);
//       $rootScope.$digest();

//       $animate.enabled(true);
//       $animate.addClass(element, 'ng-hide');
//       $rootScope.$digest();
//       $window.setTimeout(function(){
//         expect(element.css('opacity')).to.be('0');
//         done();
//       },1000);
//     });
//   });
// });