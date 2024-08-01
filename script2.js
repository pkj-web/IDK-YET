document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const navigateButton = document.getElementById('navigateButton');
    if (navigateButton) {
        console.log('Found navigateButton');
        navigateButton.addEventListener('click', () => {
            console.log('navigateButton clicked');
            window.location.href = '/';
        });
    } else {
        console.log('navigateButton not found');
    }

    const timeButtons = document.getElementsByClassName('Time');
    if (timeButtons.length > 0) {
        console.log('Found Time buttons');
        Array.from(timeButtons).forEach(button => {
            button.addEventListener('click', () => {
                console.log('Time button clicked');
                timer();
            });
        });
    } else {
        console.log('Time buttons not found');
    }

    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', () =>{
            window.location.href = '/test/progress';
            timer()
            // The line below clears the screen (The body of the html to be specfic.)
            document.body.innerHTML = '';
            timer2()
            

            
        })

    }
});

function timer() {
    console.log('Timer has started');
    setTimeout(function() {
        console.log('Time has finished!');
        bg_color('lightblue')
    }, 500);
}

function timer2() {
    console.log('Timer has started');
    setTimeout(function() {
        console.log('Time has finished!');
        bg_color('green')
    }, 5000);
}

function bg_color(color) {
    document.body.style.backgroundColor = color

   
}