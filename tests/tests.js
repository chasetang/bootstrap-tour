// Generated by CoffeeScript 1.6.2
module("bootstrap-tour",{teardown:function(){this.tour.setState("current_step",null);this.tour.setState("end",null);return $.each(this.tour._steps,function(e,t){if(t.element!=null&&t.element.popover!=null)return t.element.popover("hide").removeData("popover")})}});test("Tour should set the tour options",function(){this.tour=new Tour({name:"test",afterSetState:function(){return!0},afterGetState:function(){return!0}});equal(this.tour._options.name,"test","options.name is set");ok(this.tour._options.afterGetState,"options.afterGetState is set");return ok(this.tour._options.afterSetState,"options.afterSetState is set")});test("Tour should throw an error if the jquery.cookie is not loaded",function(){var e;e=$.cookie;$.cookie=!1;throws(this.tour=new Tour,new Error("jQuery.cookie is not loaded.","tour show 'message' if jquery.cookie is not loaded"));return $.cookie=e});test("Tour should have default name of 'tour'",function(){this.tour=new Tour;return equal(this.tour._options.name,"tour","tour default name is 'tour'")});test("Tour should accept an array of steps and set the current step",function(){this.tour=new Tour;deepEqual(this.tour._steps,[],"tour accepts an array of steps");return strictEqual(this.tour._current,0,"tour initializes current step")});test("Tour.setState should save state cookie",function(){this.tour=new Tour;this.tour.setState("test","yes");return strictEqual($.cookie("tour_test"),"yes","tour saves state cookie")});test("Tour.getState should get state cookie",function(){this.tour=new Tour;this.tour.setState("test","yes");strictEqual(this.tour.getState("test"),"yes","tour gets state cookie");return $.cookie("tour_test",null)});test("Tour.setState should save state localStorage items",function(){this.tour=new Tour({useLocalStorage:!0});this.tour.setState("test","yes");return strictEqual(window.localStorage.getItem("tour_test"),"yes","tour save state localStorage items")});test("Tour.getState should get state localStorage items",function(){this.tour=new Tour({useLocalStorage:!0});this.tour.setState("test","yes");strictEqual(this.tour.getState("test"),"yes","tour saves state localStorage items");return window.localStorage.setItem("tour_test",null)});test("Tour.addStep should add a step",function(){var e;this.tour=new Tour;e={element:$("<div></div>").appendTo("#qunit-fixture")};this.tour.addStep(e);return deepEqual(this.tour._steps,[e],"tour adds the step")});test("Tour.addSteps should add multiple step",function(){var e,t;this.tour=new Tour;e={element:$("<div></div>").appendTo("#qunit-fixture")};t={element:$("<div></div>").appendTo("#qunit-fixture")};this.tour.addSteps([e,t]);return deepEqual(this.tour._steps,[e,t],"tour adds multiple steps")});test("Tour step should have an id",function(){var e;this.tour=new Tour;e=$("<div></div>").appendTo("#qunit-fixture");this.tour.addStep({element:e});this.tour.start();return strictEqual(e.data("popover").tip().attr("id"),"step-0","tour runs onStart when the first step shown")});test("Tour with onStart option should run the callback before showing the first step",function(){var e;e=0;this.tour=new Tour({onStart:function(){return e+=2}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();return strictEqual(e,2,"tour runs onStart when the first step shown")});test("Tour with onEnd option should run the callback after hiding the last step",function(){var e;e=0;this.tour=new Tour({onEnd:function(){return e+=2}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.end();return strictEqual(e,2,"tour runs onEnd when the last step hidden")});test("Tour with onShow option should run the callback before showing the step",function(){var e;e=0;this.tour=new Tour({onShow:function(){return e+=2}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();strictEqual(e,2,"tour runs onShow when first step shown");this.tour.next();return strictEqual(e,4,"tour runs onShow when next step shown")});test("Tour with onShown option should run the callback after showing the step",function(){var e;e=0;this.tour=new Tour({onShown:function(){return e+=2}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();return strictEqual(e,2,"tour runs onShown after first step shown")});test("Tour with onHide option should run the callback before hiding the step",function(){var e;e=0;this.tour=new Tour({onHide:function(){return e+=2}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.next();strictEqual(e,2,"tour runs onHide when first step hidden");this.tour.hideStep(1);return strictEqual(e,4,"tour runs onHide when next step hidden")});test("Tour with onHidden option should run the callback after hiding the step",function(){var e;e=0;this.tour=new Tour({onHidden:function(){return e+=2}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.next();strictEqual(e,2,"tour runs onHidden after first step hidden");this.tour.next();return strictEqual(e,4,"tour runs onHidden after next step hidden")});test("Tour.addStep with onShow option should run the callback before showing the step",function(){var e;e=0;this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),onShow:function(){return e=2}});this.tour.start();strictEqual(e,0,"tour does not run onShow when step not shown");this.tour.next();return strictEqual(e,2,"tour runs onShow when step shown")});test("Tour.addStep with onHide option should run the callback before hiding the step",function(){var e;e=0;this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),onHide:function(){return e=2}});this.tour.start();this.tour.next();strictEqual(e,0,"tour does not run onHide when step not hidden");this.tour.hideStep(1);return strictEqual(e,2,"tour runs onHide when step hidden")});test("Tour.getStep should get a step",function(){var e;this.tour=new Tour;e={element:$("<div></div>").appendTo("#qunit-fixture"),container:"body",path:"test",placement:"left",title:"Test",content:"Just a test",id:"step-0",prev:-1,next:2,end:!1,animation:!1,backdrop:!1,redirect:!0,onShow:function(e){},onShown:function(e){},onHide:function(e){},onHidden:function(e){},template:"<div class='popover tour'>    <div class='arrow'></div>    <h3 class='popover-title'></h3>    <div class='popover-content'></div>    </div>"};this.tour.addStep(e);return deepEqual(this.tour.getStep(0),e,"tour gets a step")});test("Tour.start should start a tour",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();return strictEqual($(".popover").length,1,"tour starts")});test("Tour.start should not start a tour that ended",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.setState("end","yes");this.tour.start();return strictEqual($(".popover").length,0,"previously ended tour don't start again")});test("Tour.start(true) should force starting a tour that ended",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.setState("end","yes");this.tour.start(!0);return strictEqual($(".popover").length,1,"previously ended tour starts again if forced to")});test("Tour.next should hide current step and show next step",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.next();strictEqual(this.tour.getStep(0).element.data("popover").tip().filter(":visible").length,0,"tour hides current step");return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour shows next step")});test("Tour.end should hide current step and set end state",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.end();strictEqual(this.tour.getStep(0).element.data("popover").tip().filter(":visible").length,0,"tour hides current step");return strictEqual(this.tour.getState("end"),"yes","tour sets end state")});test("Tour.ended should return true is tour ended and false if not",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();strictEqual(this.tour.ended(),!1,"tour returns false if not ended");this.tour.end();return strictEqual(this.tour.ended(),!0,"tour returns true if ended")});test("Tour.restart should clear all states and start tour",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.next();this.tour.end();this.tour.restart();strictEqual(this.tour.getState("end"),null,"tour sets end state");strictEqual(this.tour._current,0,"tour sets first step");return strictEqual($(".popover").length,1,"tour starts")});test("Tour.hideStep should hide a step",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.hideStep(0);return strictEqual(this.tour.getStep(0).element.data("popover").tip().filter(":visible").length,0,"tour hides step")});test("Tour.showStep should set a step and show it",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.showStep(1);strictEqual(this.tour._current,1,"tour sets step");strictEqual($(".popover").length,1,"tour shows one step");return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour shows correct step")});test("Tour.showStep should not show anything when the step doesn't exist",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.showStep(2);return strictEqual($(".popover").length,0,"tour doesn't show any step")});test("Tour.showStep should skip step when no element is specified",function(){this.tour=new Tour;this.tour.addStep({});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.showStep(1);return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour skips step with no element")});test("Tour.showStep should skip step when element doesn't exist",function(){this.tour=new Tour;this.tour.addStep({element:"#tour-test"});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.showStep(1);return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour skips step with no element")});test("Tour.showStep should skip step when element is invisible",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture").hide()});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.showStep(1);return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour skips step with no element")});test("Tour.setCurrentStep should set the current step",function(){this.tour=new Tour;this.tour.setCurrentStep(4);strictEqual(this.tour._current,4,"tour sets current step if passed a value");this.tour.setState("current_step",2);this.tour.setCurrentStep();return strictEqual(this.tour._current,2,"tour reads current step state if not passed a value")});test("Tour.showNextStep should show the next step",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.showNextStep();return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour shows next step")});test("Tour.showPrevStep should show the previous step",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.showStep(1);this.tour.showPrevStep();return strictEqual(this.tour.getStep(0).element.data("popover").tip().filter(":visible").length,1,"tour shows previous step")});test("Tour.showStep should show multiple step on the same element",function(){var e;e=$("<div></div>").appendTo("#qunit-fixture");this.tour=new Tour;this.tour.addStep({element:e});this.tour.addStep({element:e});this.tour.start();strictEqual(this.tour.getStep(0).element.data("popover").tip().filter(":visible").length,1,"tour show the first step");this.tour.showNextStep();return strictEqual(this.tour.getStep(1).element.data("popover").tip().filter(":visible").length,1,"tour show the second step on the same element")});test("Tour properly verify paths",function(){this.tour=new Tour;strictEqual(this.tour._isRedirect(void 0,"/"),!1,"don't redirect if no path");strictEqual(this.tour._isRedirect("","/"),!1,"don't redirect if path empty");strictEqual(this.tour._isRedirect("/somepath","/somepath"),!1,"don't redirect if path matches current path");strictEqual(this.tour._isRedirect("/somepath/","/somepath"),!1,"don't redirect if path with slash matches current path");strictEqual(this.tour._isRedirect("/somepath","/somepath/"),!1,"don't redirect if path matches current path with slash");strictEqual(this.tour._isRedirect("/somepath?search=true","/somepath"),!1,"don't redirect if path with query params matches current path");strictEqual(this.tour._isRedirect("/somepath/?search=true","/somepath"),!1,"don't redirect if path with slash and query params matches current path");return strictEqual(this.tour._isRedirect("/anotherpath","/somepath"),!0,"redirect if path doesn't match current path")});test("Tour.getState should return null after Tour.removeState with null value using cookies",function(){this.tour=new Tour({useLocalStorage:!1});this.tour.setState("test","test");this.tour.removeState("test");return strictEqual(this.tour.getState("test"),null,"tour returns null after null setState")});test("Tour.getState should return null after Tour.removeState with null value using localStorage",function(){this.tour=new Tour({useLocalStorage:!0});this.tour.setState("test","test");this.tour.removeState("test");return strictEqual(this.tour.getState("test"),null,"tour returns null after null setState")});test("Tour.removeState should call afterRemoveState callback",function(){var e;e=!1;this.tour=new Tour({afterRemoveState:function(){return e=!0}});this.tour.removeState("current_step");return strictEqual(e,!0,"removeState calls callback")});test("Tour shouldn't move to the next state until the onShow promise is resolved",function(){var e;this.tour=new Tour;e=$.Deferred();this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),onShow:function(){return e}});this.tour.start();this.tour.next();strictEqual(this.tour._current,0,"tour shows old state until resolving of onShow promise");e.resolve();return strictEqual(this.tour._current,1,"tour shows new state after resolving onShow promise")});test("Tour shouldn't hide popover until the onHide promise is resolved",function(){var e;this.tour=new Tour;e=$.Deferred();this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),onHide:function(){return e}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();this.tour.next();strictEqual(this.tour._current,0,"tour shows old state until resolving of onHide promise");e.resolve();return strictEqual(this.tour._current,1,"tour shows new state after resolving onShow promise")});test("Tour shouldn't start until the onStart promise is resolved",function(){var e;e=$.Deferred();this.tour=new Tour({onStart:function(){return e}});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});this.tour.start();strictEqual($(".popover").length,0,"Tour does not start before onStart promise is resolved");e.resolve();return strictEqual($(".popover").length,1,"Tour starts after onStart promise is resolved")});test("Reflex parameter should change the element cursor to pointer when the step is displayed",function(){var e;e=$("<div></div>").appendTo("#qunit-fixture");this.tour=new Tour;this.tour.addStep({element:e,reflex:!0});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});strictEqual(e.css("cursor"),"auto","Tour doesn't change the element cursor before displaying the step");this.tour.start();strictEqual(e.css("cursor"),"pointer","Tour change the element cursor to pointer when the step is displayed");this.tour.next();return strictEqual(e.css("cursor"),"auto","Tour reset the element cursor when the step is hidden")});test("Reflex parameter should change the element cursor to pointer when the step is displayed",function(){var e;e=$("<div></div>").appendTo("#qunit-fixture");this.tour=new Tour;this.tour.addStep({element:e,reflex:!0});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture")});strictEqual(e.css("cursor"),"auto","Tour doesn't change the element cursor before displaying the step");this.tour.start();strictEqual(e.css("cursor"),"pointer","Tour change the element cursor to pointer when the step is displayed");this.tour.next();return strictEqual(e.css("cursor"),"auto","Tour reset the element cursor when the step is hidden")});test("Tour.showStep redirects to the anchor when the path is an anchor",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),path:"#mytest"});this.tour.showStep(0);strictEqual("#mytest",document.location.hash,"Tour step has moved to the anchor");return document.location.hash=""});test("Backdrop parameter should show backdrop with step",function(){this.tour=new Tour;this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),backdrop:!1});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),backdrop:!0});this.tour.showStep(0);strictEqual($(".tour-backdrop").length,0,"disable backdrop");strictEqual($(".tour-step-backdrop").length,0,"disable backdrop");strictEqual($(".tour-step-background").length,0,"disable backdrop");this.tour.showStep(1);strictEqual($(".tour-backdrop").length,1,"enable backdrop");strictEqual($(".tour-step-backdrop").length,1,"enable backdrop");strictEqual($(".tour-step-background").length,1,"enable backdrop");this.tour.end();strictEqual($(".tour-backdrop").length,0,"disable backdrop");strictEqual($(".tour-step-backdrop").length,0,"disable backdrop");return strictEqual($(".tour-step-background").length,0,"disable backdrop")});test("basePath should prepend the path to the steps",function(){this.tour=new Tour({basePath:"test/"});this.tour.addStep({element:$("<div></div>").appendTo("#qunit-fixture"),path:"test.html"});return strictEqual(this.tour._isRedirect(this.tour._options.basePath+this.tour.getStep(0).path,"test/test.html"),!1,"Tour adds basePath to step path")});