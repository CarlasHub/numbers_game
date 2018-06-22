<html>
<head>
<meta charset="utf-8">
   <title>Original Numbers Game</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda">
    <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker" >
    <link rel="stylesheet" href="game.css">
</head>
<body>
    <div class="overlay-light"></div>
<div class="container">
        <header>
            <h1> The Great Numbers Game </h1>
           
        </header>
        
        <!--================php goes here=======-->
            <?php 
		// Welcome the user
		echo "<h2>";
			echo "Welcome, " . htmlspecialchars($_GET['name']); // Escaped for security
		echo "</h2>";

		?>
		<script>
			setTimeout(function() {
				alert("Hi <?php echo $_GET['name']; ?>. Order the numbers in the less space of time, ok?");
			}, 5000);			
		</script>
		<?php
		?>

<!--==================SCORE PANEL=====================-->

        <section class="score-panel">
        	<ul class="stars">
        		<li><i class="fa fa-star"></i></li>
        		<li><i class="fa fa-star"></i></li>
        		<li><i class="fa fa-star"></i></li>
        	</ul>

        	<span class="moves">100</span> Move(s)

            <div class="timer">
            </div>
            <!--refresh the Game-->
            <div id="restart">
        		<i class="fa fa-repeat"></i>
        	</div>
        </section>

<!==================TABLE=====================-->

<div class="table" >
  
    </div>
     <a href="https://github.com/CarlasHub">Source Code</a>
  </div>


<!==================MODAL=====================-->

<div id="popup1" class="overlay">
            <div class="popup">
                <h2>Congratulations 🎉</h2>
                <a class="close" href=# >×</a>
                <div class="content-1">
                    Congratulations you're a winner 🎉🎉
                </div>
                <div class="content-2">
                    <p>You made <span id=finalMove> </span> moves </p>
                    <p>in <span id=totalTime> </span> </p>
                    <p>Rating:  <span id=starRating></span></p>
                </div>
                <button id="play-again"onclick="playAgain()">
                    Play again 😄</a>
                </button>
            </div>
        </div>

    </div>
    <script src="game.js"></script>
    </body>
</html>