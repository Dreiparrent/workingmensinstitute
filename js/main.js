(function($) {
'use strict';
	// Setup variables
	// Page vars
	var	$head = $('.head'),
		$homeHead = $('.homeHead'),
		$homeHeadText = $('.homeHeadText'),
		$topMenu = $('.topMenu'),
		$men1 = $('.men1'),
		$men2 = $('.men2'),
		$men3 = $('.men3'),
		$menuText = $('.menuText'),
		$logo = $('.logo'),
		$search = $('.search'),
		$headText = $('.headText'),
		$tabs = $('.tabs'),
		$tab = $('.tab'),
		$homeTab = $('.homeTab'),
		$activeTab = $('.activeTab'),
		$historyTab = $('.historyTab'),
		$museumTab = $('.museumTab'),
		$libraryTab = $('.libraryTab'),
		$calendarTab = $('.calendarTab'),
		$triangle = $('.triangle'),
		$quickCalendar = $('.quickCalendar'),
		$body = $('.body'),
		$homeBody = $('.homeBody'),
		$historyBody = $('.historyBody'),
		$museumBody = $('.museumBody'),
		$libraryBody = $('.libraryBody'),
		$calendarBody = $('.calendarBody'),
		$foot = $('.foot'),
		$linksBox = $('.linksBox'),
		$quickLinks = $('.quickLinks'),
		$minutes = $('.minutes'),
		$lectureSeries = $('.lectureSeries'),
		$athena = $('.athena'),
		$byLaws = $('.byLaws'),
		$donate = $('.donate'),
		$contact = $('.contact'),
		$facebookIcon = $('.facebookIcon'),
		$twitterIcon = $('.twitterIcon'),
		$inIcon = $('.inIcon'),
		$facebook = $('.fa-facebook-f'),
		$twitter = $('.fa-twitter'),
		$linkedin = $('.fa-linkedin'),
		$contactOverlay = $('.contactOverlay'),
		$contactInner = $('.contactInner'),
		$xButton = $('.xButton'),
		$xButtonRed = $('.xButtonRed');
	
	//Initial Vars
	var $currentPage = $homeBody,
		bodyHeight = $homeBody.height()+40,
		pagenum = 1,
		atHome = true,
		triangleLeft = $homeTab.width()/2 + $homeTab.offset().left - 20;
	// Initial
	window.addEventListener("resize", resizeWindow);
	function resizeWindow() {
		resizeBody();
		triangleLeft = $homeTab.width()/2 + $homeTab.offset().left - 20;
		triangleSet();
	}
	function resizeBody() {
		if (pagenum === 1){
			TweenLite.to($homeHead, 1, {autoAlpha: 0.5, height: '80px'});
			TweenLite.to([$triangle, $headText, $logo], 1, {autoAlpha: 0, ease:Power3.easeOut});
			TweenLite.set($foot, {position: "absolute", bottom: 0, height: '90px'});
			TweenLite.set($tabs, {position: "absolute", top: 'auto'});
			TweenLite.to($tabs, 1, {autoAlpha: 0.7, bottom: '90px', ease:Power3.easeIn});
			TweenLite.set($linksBox, {bottom:0, y: 0});
			TweenMax.to($quickCalendar, 1, {delay: 0.7, left:'-34vw', ease:Power2.easeInOut});
			document.body.style.overflow = "hidden";
		} else {
			if (atHome === true){
				TweenLite.set($homeHead, {autoAlpha: 0, height: '170px'});
				TweenLite.to([$head, $triangle, $headText, $logo], 0.5, {autoAlpha: 1});
				TweenLite.set($foot, {position: "relative", height: '120px'});
				TweenLite.to($tabs, 0.7, {top: '170px', ease:Power1.easeOut});
				TweenMax.set($tabs, {delay: 0.6, position: "relative", top: 0, bottom: 0});
				TweenLite.to($tabs, 1 ,{autoAlpha: 1, ease:Power3.easeOut});
			}
			TweenLite.to($quickCalendar, 0.7, {left:'-35vw', ease:Power3.easeOut});
			bodyHeight = $currentPage.height()+40;
			$body.css({'height':bodyHeight});
			TweenLite.set($linksBox, {y: bodyHeight - 480});
			document.body.style.overflow = "scroll";
		}
		//$linksBox.css({'top':})
	}
	function triangleSet() {
		TweenLite.set($triangle, {x: triangleLeft});
	}
	function init(){
		resizeBody();
		//TweenLite.set($head, {autoAlpha: '0.8'});
		TweenLite.set($homeTab, {color: "#2E2E2E"});
		TweenMax.set([$head, $triangle], {display:"block", autoAlpha:0});
		TweenLite.set($linksBox, {display:"block"});
		triangleSet();
	}
	init();
	
	// main
	$topMenu.hover( function(){
		TweenLite.to($menuText, 0.5, {opacity: 1, ease:Power3.easeIn});
		TweenLite.to($men1, 0.5, {y: '+4', x: '+20', rotation:'90', transformOrigin:'25%'});
		TweenLite.to($men2, 0.5, {y: '+15', x: '+24', width:'75px', transformOrigin:'75%'});
		TweenLite.to($men3, 0.5, {y: '+3', x: '+78', rotation:'90', transformOrigin:'75%'});
	}, function() {
		TweenLite.to($menuText, 0.5, {opacity: 0, ease:Power3.easeOut});
		TweenLite.to($men1, 0.5, {y: '0', x: '0', rotation:'0', transformOrigin:'25%'});
		TweenLite.to($men2, 0.5, {y: '0', x:'0', width:'25px', transformOrigin:'75%'});
		TweenLite.to($men3, 0.5, {y: '0', x: '0', rotation:'0', transformOrigin:'75%'});
	});
	$search.hover( function(){
		TweenLite.to($(this), 0.5, {color: "#C8504D"});
	}, function() {
		TweenLite.to($(this), 0.5, {color: "#EFE4CF"});
	});
	function hoverIn(thisVar, hoverNum) {
		TweenMax.killTweensOf($triangle);
		TweenLite.to(thisVar, 0.5, {color: "#2E2E2E"});
		TweenLite.to($triangle, 0.5, {x: hoverNum});
	}
	function hoverOut(thisVar, tabNum) {
		if (pagenum !== tabNum) {
			TweenLite.to(thisVar, 0.5, {color: "#840001"});
		}
		TweenMax.to($triangle, 1, {delay:0.5, x: triangleLeft, ease: Power2.easeOut});
	}
	//make these pixle values relative
	$homeTab.hover( function(){
		var hoverNum = $(this).width()/2 + $(this).offset().left - 20;
		hoverIn($(this), hoverNum);
	}, function() {
		hoverOut($(this), 1);
	});
	$historyTab.hover( function(){
		var hoverNum = $(this).width()/2 + $(this).offset().left -20;
		hoverIn($(this), hoverNum);
	}, function() {
		hoverOut($(this), 2);
	});
	$museumTab.hover( function(){
		var hoverNum = $(this).width()/2 + $(this).offset().left - 20;
		hoverIn($(this), hoverNum);
	}, function() {
		hoverOut($(this), 3);
	});
	$libraryTab.hover( function(){
		var hoverNum = $(this).width()/2 + $(this).offset().left -20;
		hoverIn($(this), hoverNum);
	}, function() {
		hoverOut($(this), 4);
	});
	$calendarTab.hover( function(){
		var hoverNum = $(this).width()/2 + $(this).offset().left - 20;
		hoverIn($(this), hoverNum);
	}, function() {
		hoverOut($(this), 5);
	});
	
	$homeTab.click(function(e){
		e.preventDefault();
		scroll(1, $homeBody, $(this));
		atHome = true;
	});
	$historyTab.click(function(e){
		e.preventDefault();
		scroll(2, $historyBody, $(this));
		atHome = false;
	});
	$museumTab.click(function(e){
		e.preventDefault();
		scroll(3, $museumBody, $(this));
		atHome = false;
	});
	$libraryTab.click(function(e){
		e.preventDefault();
		scroll(4, $libraryBody, $(this));
		atHome = false;
	});
	$calendarTab.click(function(e){
		e.preventDefault();
		scroll(5, $calendarBody, $(this));
		atHome = false;
		TweenMax.to($quickCalendar, 1, {left:'-34vw', ease:Power2.easeInOut});
	});
	
	function scroll(newnum, newPage, tab){
		if (pagenum < newnum){
			TweenMax.set(newPage, {x: "+=110%", display: "block"});
			TweenMax.to($currentPage, 1, {x: '-110%', ease:Power3.easeOut});
			TweenMax.fromTo(newPage, 1, {x: '+110%'}, {x: '-=110%', ease:Power3.easeOut});
			TweenMax.to($currentPage, 1, {delay: 0.5, display: "none"});
		}
		else if (pagenum > newnum){
			TweenMax.set(newPage, {x: "-=110%", display: "block"});
			TweenMax.to($currentPage, 1, {x: '+110%', ease:Power3.easeOut});
			TweenMax.fromTo(newPage, 1, {x: "-110%"}, {x: '+=110%', ease:Power3.easeOut});
			TweenMax.to($currentPage, 1, {delay: 0.5, display: "none"});
		}
		$currentPage = newPage;
		pagenum = newnum;
		triangleLeft = tab.width()/2 + tab.offset().left - 20;
		TweenLite.set($tab.not(tab), {color: "#840001"});
		TweenLite.set(tab, {color: "#2E2E2E"});
		resizeBody();
	}
	
	/*
	$homeBody.hover( function(){
		TweenLite.to($quickCalendar, 1, {right: '1vw', ease:Power2.easeInOut});
	}, function() {
		TweenLite.to($quickCalendar, 1, {right: '-19vw', ease:Power2.easeInOut});
	});
	*/
	$quickCalendar.hover( function(){
		TweenLite.to($quickCalendar, 1, {left: '0vw', ease:Power2.easeInOut});
	}, function() {
		TweenLite.to($quickCalendar, 1, {left: '-34vw', ease:Power2.easeInOut});
	});
	
	$homeBody.click(function(e){
		if (quickClicked === true){
			closeLinkDrawer();
		}
	});
	$historyBody.click(function(e){
		if (quickClicked === true){
			closeLinkDrawer();
		}
	});
	$museumBody.click(function(e){
		if (quickClicked === true){
			closeLinkDrawer();
		}
	});
	$libraryBody.click(function(e){
		if (quickClicked === true){
			closeLinkDrawer();
		}
	});
	function closeLinkDrawer() {
		TweenLite.to($linksBox, 0.7, {y: '+=90px', ease:Power2.easeInOut});
		quickClicked = false;
	}
	
	// Foot
	function footHoverIn(thisVar){
		TweenLite.to(thisVar, 0.5, {color: "#EFE4CF"});
	}
	function footHoverOut(thisVar){
		TweenLite.to(thisVar, 0.5, {color: "#C8504D"});
	}
	
	$quickLinks.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	$donate.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	$contact.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	var quickClicked = false;
	
	$quickLinks.click(function(e){
		e.preventDefault();
		if (quickClicked === false){
			TweenLite.to($linksBox, 0.7, {y: '-=90px', ease:Power2.easeInOut});
			quickClicked = true;
		}
		else {
			TweenLite.to($linksBox, 0.7, {y: '+=90px', ease:Power2.easeInOut});
			quickClicked = false;
		}
	});
	
	$minutes.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	$lectureSeries.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	$athena.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	$byLaws.hover( function(){footHoverIn($(this));}, function() {footHoverOut($(this));});
	
	
	$contact.click(function(e){
		e.preventDefault();
		TweenLite.to($contactOverlay, 0.7, {height:'100vh', ease:Power2.easeOut});
		TweenLite.set($contactInner, {display:"inline"});
		TweenLite.fromTo($contactInner, 0.7, {y: '+=100%'}, {y: '-50%', ease:Power2.easeOut});
	});
	$xButton.hover( function(){
		TweenLite.to($(this), 0.2, {opacity: 0});
		TweenLite.to([$(this), $xButtonRed], 0.5, {rotation:90});
	}, function() {
		TweenLite.to($(this), 0.2, {opacity: 1});
		TweenLite.to([$(this), $xButtonRed], 0.5, {rotation: -90});
	});
	
	$xButton.click(function(e){
		e.preventDefault();
		TweenLite.to($contactOverlay, 0.7, {height: 0, ease:Power2.easeOut});
		TweenLite.to($contactInner, 0.7, {y: '+=150%', ease:Power2.easeOut});
		TweenMax.set($contactInner, {delay: 1, display: "none", y:'-50%'});
	});
	
	// Social Media Icons
	$facebookIcon.hover( function(){
		TweenLite.to($(this), 0.5, {backgroundColor: "#3B5998", borderRadius:'4px'});
		TweenLite.to($facebook, 0.5, {color: "#fff"});
	}, function() {
		TweenLite.to($(this), 0.5, {backgroundColor: "#C8504D", borderRadius:'25px'});
		TweenLite.to($facebook, 0.5, {color: "#EFE4CF"});
	});
	$twitterIcon.hover( function(){ 
		TweenLite.to($(this), 0.5, {backgroundColor: "#2E2E2E"});
		TweenLite.to($twitter, 0.5, {color: "#0084b4"});
	}, function() {
		TweenLite.to($(this), 0.5, {backgroundColor: "#C8504D"});
		TweenLite.to($twitter, 0.5, {color: "#EFE4CF"});
	});
	$inIcon.hover( function(){
		TweenLite.to($(this), 0.5, {backgroundColor: "#0077B5", borderRadius:'3px'});
		TweenLite.to($linkedin, 0.5, {color: "#fff"});
	}, function() {
		TweenLite.to($(this), 0.5, {backgroundColor: "#C8504D", borderRadius:'25px'});
		TweenLite.to($linkedin, 0.5, {color: "#EFE4CF"});
	});
	
})(jQuery);