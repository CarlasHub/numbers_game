<html>
<head>
<meta charset="utf-8">
   <title>OrigINal Numbers Game</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda">
    <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker" >
    <link rel="stylesheet" href="landing.css">
</head>
<body>
<div class="overlay-light"></div>
<div class="container ">
        <header>
            <h1> The Great Numbers Game </h1>
            
        </header>
<p>Exercise your frontal lobe like never before.......</p>


<!--================php goes here - user must enter email to play the game=======-->
<?php 


	if(isset($_GET['name']) && isset($_GET['email'])) {

		// Welcome the user
		echo "<h2>";
			echo "Welcome, " . htmlspecialchars($_GET['name']); // Escaped for security
			echo " <small>(" . htmlspecialchars($_GET['email']) . ")</small>";  // Escaped for security
		echo "</h2>";

		?>
		<script>
			setTimeout(function() {
				alert("Hi <?php echo $_GET['name']; ?>. Welcome! time to play , shall we?!");
			}, 5000);			
		</script>
		<?php
	} else {
		// Ask the user for their name and email address.
		?>

		<form class="form-group" method='GET' action="/game.php">
			<h2>Please enter your name and email address.</h2>
			<label for="exampleInputEmail1" for="name">Your unforgettable name</label>
			<br>
			<input type="text" name='name' required='required' placeholder="name">
			<br />

			<label for="email">Your awesome email</label>
			<br>
			<input type="email" name="email" required='required' placeholder="email">
			<br />
			<br>

			<button type="submit">Start Game!</button>
		</form>
	<iframe style="display: none" src="https://www.youtube.com/embed/vtihy-enOsY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		<?php
	}
?>



</body>
</html>