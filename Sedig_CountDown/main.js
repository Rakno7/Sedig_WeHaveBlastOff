
//let max_x = 200
//let max_y = 200
////creates and element on screen called game area and defines various parameters.
//let gamearea = document.createElement('div')
////Makes it so backround elements arent effected by pointer clicks
//gamearea.style.pointerEvents = "none";
//gamearea.style.position = 'fixed'
//gamearea.style.top = '0px'
//gamearea.style.left = '0px'
//gamearea.style.width = max_x + "px"
//gamearea.style.height = max_y + "px"
//gamearea.style.border = "1px solid white"
////makes sure this element renders behind everything else by giving it the lowest index
//gamearea.style.zIndex = -999
////adds the element to the document
//document.body.appendChild(gamearea)

        let Posy = 800

        let Posx = 200

        let OpacityTimer = 0

        let speedY = 0.1

        var launch = false

        var RocketReset = false

        var colorTimer = 5

        //This is the Time the timer will start at and reset to.
        const StartingTime = 10;

        //time is the variable which will store the current time, which will start at the starting time.
        let time = StartingTime;

        //The ammount of time to pass before the timer resets from 0 back to the starting time.
        let ResetTime = 0.5;

        //This stores how many times the timer has been reset. 
        let RocketsLaunched = 0;

        //changes to this variable will update the countdown variable within the paragragh above.
        const count = document.getElementById("countdown");

        //changes to this variable will update the RocketLauched variable within the paragragh above.
        const Launchcount = document.getElementById("RocketsLaunched")

        //changes to this variable will update the Warning variable within the paragragh above.
        const Warning = document.getElementById("Warning")

        //finished mission is called when the timer resets three times, and stops the print message from repeating infinitely
        let finishedMission = false;
      

        //Sets the intreval at which the function is called.
        setInterval(RunCountDown, 1000);
        setInterval(RunMotion, 20);

        //separate function for element motion so it updates quicker then the timer. 
        function RunMotion() 
        {
            //set the opatity of the rocket to fade out
            if (launch) {
                if (OpacityTimer > 0) {
                    OpacityTimer -= 0.005
                    Launchcount.style.opacity = OpacityTimer
                }
                //move the rocket up the screen
                Posy -= 5;
                //set the element position on the y to Posy
                setXY();
            }
            if (!launch) 
            {
                //set opacity of rocket to fade in
                if (OpacityTimer < 1) {
                    OpacityTimer += 0.005
                    Launchcount.style.opacity = OpacityTimer
                }
                //set rocket position back on the y
                //move rocket sideways to prepare for launch
                Posx += 0.2
                Posy = 600
                //set element position
                setXY();
                if (launch) {
                    //reset the flashing warning timer
                    colorTimer = 5
                }
                //
                if (count.innerHTML <= 5 && count.innerHTML > 0 && !launch) {

                    if (colorTimer < 0) {
                        colorTimer = 5
                    }
                    //when the timer is half way through the color timer will decrease
                    //each whole number it lands on will change the color
                    if (colorTimer <= 5 && colorTimer > 4) {
                        //change the color
                        Warning.style.backgroundColor = "rgb(224, 31, 31)";
                    }
                    if (colorTimer <= 4 && colorTimer > 3) {
                        Warning.style.backgroundColor = "rgb(91, 91, 104)";
                    }
                    if (colorTimer <= 3 && colorTimer > 2) {
                        Warning.style.backgroundColor = "rgb(224, 31, 31)";
                    }
                    if (colorTimer <= 2 && colorTimer > 1) {
                        Warning.style.backgroundColor = "rgb(91, 91, 104)";
                    }
                    if (colorTimer <= 1) {
                        Warning.style.backgroundColor = "rgb(224, 31, 31)";
                    }
                    //decreases the timer
                    colorTimer -= 0.01
                }
            }
        }

        //this is the timer
        function RunCountDown() {

            //Seconds will also keep track of the count.
            const Seconds = time




            //As long as Seconds is greater then 0 and hasnt launched 3 times, the timer will countdown and this block will loop
            if (Seconds >= 0) {
                //Reset ResetTime back to 1 when the timer is greater then 0.
                ResetTime = 0.5;

                //Update the countdown paragraph text to display the seconds on screen.
                count.innerHTML = Seconds;

                //decrease time by 1 at the end of each loop. 
                time--;
            }

            //When the Seconds count is 0 or less and 3 rockets have not been launched, this block will loop
            if (launch) {
                Warning.innerHTML = "Takeoff!";
                //Display 0 instead of "seconds", just incase the timer is -1.
                count.innerHTML = "0";
            }

            if (Seconds <= 0) {


                //reset time will decrease by one
                launch = true
                ResetTime -= 0.1;
            }

            //When the timer and ResetTime are both 0 or less this will run and will not loop.
            if (ResetTime <= 0) {
                //Updates the RocketsLauched paragraph text to increase by 1, if three rockets are launched the mission will succeed.
                Launchcount.innerHTML++;
                Posx = 200
                launch = false

                //resets time to 10, the starting time, so the countdown can start back over.
                time = StartingTime;

                //ResetTime is no longer equal to 0, so the code within this condition no longer plays and the timer resumes. 
                ResetTime = 0.5;
            }

            if (count.innerHTML <= 5 && count.innerHTML > 3) {


                //Sets the countdown paragraph text to read 0;
                Warning.innerHTML = "Warning";
                //Warning.style.opacity

                //when countdown is halfway display warning 
            }
            if (count.innerHTML <= 3 && count.innerHTML > 0) {
                //Sets the countdown paragraph text to read 0;
                Warning.innerHTML = "Launch in:" + " " + Seconds;

                //Writes a message to the screen.
                //document.write("Blast off! You have successfully launched all three rockets")

                //sets finishedMission true so that this condition is no longer met and the loop and timer stop. 
                //finishedMission = true;
            }
            if (count.innerHTML > 5 && !launch) {

                //Sets the countdown paragraph text to read 0;
                Warning.innerHTML = "Stand by";
                Warning.style.backgroundColor = "rgb(104, 104, 112)";
                //Writes a message to the screen.
                //document.write("Blast off! You have successfully launched all three rockets")

                //sets finishedMission true so that this condition is no longer met and the loop and timer stop. 
                //finishedMission = true;
            }

        }
        function setXY() {
            //then I set the elements position on the page to the x and y value
            Launchcount.style.position = 'fixed'
            Launchcount.style.left = Posx + "px"
            Launchcount.style.top = Posy + "px"
        }
    







