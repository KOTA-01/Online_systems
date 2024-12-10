document.addEventListener('DOMContentLoaded', () => {


    const speedControlTop = document.getElementById('speed-control-top');
    const speedControlBottom = document.getElementById('speed-control-bottom');
    const steeringControlTop = document.getElementById('steering-control-top');
    const steeringControlBottom = document.getElementById('steering-control-bottom');

    // Synchronize speed controls
    speedControlTop.addEventListener('input', (e) => {
        speedControlBottom.value = e.target.value;
        console.log(`Speed set to: ${e.target.value}`);
    });

    speedControlBottom.addEventListener('input', (e) => {
        speedControlTop.value = e.target.value;
        console.log(`Speed set to: ${e.target.value}`);
    });

    // Synchronize steering controls
    steeringControlTop.addEventListener('input', (e) => {
        steeringControlBottom.value = e.target.value;
        console.log(`Steering set to: ${e.target.value}`);
    });

    steeringControlBottom.addEventListener('input', (e) => {
        steeringControlTop.value = e.target.value;
        console.log(`Steering set to: ${e.target.value}`);
    });
	
	const STEERING_LIMIT_MIN = -100;
	const STEERING_LIMIT_MAX = 100;
	
	document.addEventListener('keydown', (event) => {
		if (event.key.toLowerCase() === 'd') {
			let newValue = parseInt(steeringControlBottom.value) + 2;
			newValue = Math.min(newValue, STEERING_LIMIT_MAX); 
			steeringControlBottom.value = newValue;
			steeringControlTop.value = newValwue;
			console.log(`Steering set to: ${newValue}`);
		}
	});
	
	document.addEventListener('keydown', (event) => {
		if (event.key.toLowerCase() === 'a') {
			let newValue = parseInt(steeringControlBottom.value) - 2;
			newValue = Math.max(newValue, STEERING_LIMIT_MIN); 
			steeringControlBottom.value = newValue;
			steeringControlTop.value = newValue;
			console.log(`Steering set to: ${newValue}`);
		}
	});
	
	const SPEED_LIMIT_MIN = 0;
	const SPEED_LIMIT_MAX = 100;
	
	document.addEventListener('keydown', (event) => {
		if (event.key.toLowerCase() === 'w') {
			let newValue = parseInt(speedControlBottom.value) + 10;
			newValue = Math.min(newValue, SPEED_LIMIT_MAX); 
			speedControlBottom.value = newValue;
			speedControlTop.value = newValue;
			console.log(`Speed set to: ${newValue}`);
		}
	});
	
	document.addEventListener('keydown', (event) => {
		if (event.key.toLowerCase() === 's') {
			let newValue = parseInt(speedControlBottom.value) - 10;
			newValue = Math.max(newValue, SPEED_LIMIT_MIN);
			speedControlBottom.value = newValue;
			speedControlTop.value = newValue;
			console.log(`Speed set to: ${newValue}`);
		}
	});
	
});

document.addEventListener('keydown', (event) => {
	if (event.key.toLowerCase() === 'f') {
		toggleFullscreen();
	}
});
document.addEventListener('keydown', (event) => {
	if (event.key.toLowerCase() === 'q') {
		toggleOverlays();
	}
});


function toggleOverlays() {
    const speedOverlay = document.querySelector('.overlay-controls');
    const steeringOverlay = document.querySelector('.overlay-steering');

    const isVisible = speedOverlay.style.display === 'block';

    speedOverlay.style.display = isVisible ? 'none' : 'block';
    steeringOverlay.style.display = isVisible ? 'none' : 'block';
}

function toggleSystemState(system) {
    const statusIndicator = document.getElementById(`${system}-status`);
    statusIndicator.classList.toggle('active');

    console.log(`${system.charAt(0).toUpperCase() + system.slice(1)} system toggled`);
}
function toggleCalibrationState(system) {
    const statusIndicator = document.getElementById(`${system}-status`);
    statusIndicator.classList.toggle('active-blink');

    console.log(`${system.charAt(0).toUpperCase() + system.slice(1)} system toggled`);
}
function toggleFullscreen() {
    const videoSection = document.querySelector('.video-section');
    if (!document.fullscreenElement) {
        videoSection.classList.add('fullscreen');
        videoSection.requestFullscreen();
    } else {
        document.exitFullscreen();
        videoSection.classList.remove('fullscreen');
    }
}

