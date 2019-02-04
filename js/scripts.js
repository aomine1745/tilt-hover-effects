$(document).ready(function(){
	$('.card').tilt({
		maxTilt:        20,
		perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
		scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
		speed:          1000,    // Speed of the enter/exit transition.
		transition:     true,   // Set a transition on enter/exit.
		disableAxis:    null,   // What axis should be disabled. Can be X or Y.
		reset:          true,   // If the tilt effect has to be reset on exit.
		glare:          true,  // Enables glare effect
		maxGlare:       .5       // From 0 - 1.
	})
})