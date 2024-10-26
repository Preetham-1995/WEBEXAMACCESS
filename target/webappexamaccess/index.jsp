<!DOCTYPE html>
<html lang="en">
<head>
    <title>Quiz Application</title>
    <link rel="stylesheet" href="first.css" />
    <script defer src="script.js"></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
    </script>
</head>
<body >
    <div class="img">
    <div class="container step1">
        <h2>OTP Verification</h2>
        <br/>
        <h4>Enter your email address</h4>
        <br/>
        <p>You will receive an email with a one-time password</p>
        <div class="form-group">
            <input type="email" id="emailAddress" placeholder="Email Address" onkeyup="validateEmail(this.value)" />
        </div>
        <button class="nextButton">Next &rarr;</button>
    </div>

    <div class="container step2">
        <h2>OTP Verification</h2>
        <marquee>A ONE-TIME PASSWORD HAS BEEN SENT TO YOUR EMAIL ADDRESS<span id="verifyEmail"></span></marquee>
        <p>----------------------------------</p>
        <p>Enter the 4 digit code sent via email to continue</p>
        <div class="otp-group">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
        </div>
        <button class="verifyButton">Verify &rarr;</button>
        <p>
            Not your email? Didn't receive the code?
            <a href="First.html">Try Again</a>
        </p>
    </div>

    <div class="container step3">
        <h2>Congratulations</h2>
        <img src="image.png" />
        <p>Welcome 🎉 to Home Page</p>
        <h2>Thank You</h2>
        <p>Your OTP Verification has been completed successfully</p>
        <p>You can Start the quiz</p>
        
        <button id="startQuizButton" style="display: block;">Start Quiz</button>
    </div>

    <div class="container step4" style="display: none;">
        <h2>Quiz Time!</h2>
        <div class="quiz-scroll">
            <div id="quiz"></div>
        </div>
        <button id="submitQuiz">Submit Quiz</button>
        <button id="startQuizAgain" style="display: none;">Start Quiz Again</button>
        <div id="result" style="display: none;"></div>
    </div>
    
     
</div>
    

</body>
</html>
