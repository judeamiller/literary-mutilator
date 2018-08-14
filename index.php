<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

		<!--bootstrap-->
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>

		<!-- jQuery Form, Additional Methods, Validate -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>

		<!--	Scripts Link	-->
		<script src="scripts.js"></script>

		<!--		stylesheet-->
		<link rel="stylesheet" href="css/style.css"/>
		<!--	Page Title	-->
		<title>Literary Mutilator</title>
	</head>
	<body>
		<div class="container">
		<h1 class="text-center" id="title">Literary Mutilator</h1>
			<p class="text-center"><em>press "N" to enhance</em></p>
		<h3>This Paragraph Can Change Color</h3>
		<p id="futurama">Then throw her in the laundry room, which will hereafter be referred to as “the brig”. Kids have names? Come,
		Comrade Bender! We must take to the streets! Shut up and get to the point! Have you ever tried just turning off the
		TV, sitting down with your children, and hitting them?</p>
		<p><button class="btn btn-primary" type="submit" onclick="futuramaBlue()">Turn This Paragraph Blue</button>
			<button class="btn btn-danger ml-2" type="submit" onclick="futuramaRed()">Turn This Paragraph Red</button>
			<button class="btn btn-warning ml-2" type="submit" onclick="removeWord()">remove word with regex</button></p>


		<h3>Rearrange Bluth</h3>
		<p id="shuffleBluth">
			That was Tom Cruise, the actor. They said he was some kind of scientist. These are my awards, Mother. From Army.
			The seal is for marksmanship, and the gorilla is for sand racing. No! These are just strippers! Look how hot they are!
			One of the guys told me to take my head out of my BOTTOM and get back to work…my BOTTOM! We need a name. Maybe
			"Operation Hot Mother."	No, let's try to top that. (They never did.) OH MY GOD, WE'RE HAVING A FIRE… sale. Oh,
			the burning! ♪♪Amaaaaaaziiiing Graaaace ♪♪ With spicy club sauce. I'll be in the hospital bar.
			</p>

		<p><button class="btn btn-success" type="submit" onclick="resort()">Rearrange!</button>
			<button class="btn btn-success" type="submit" onclick="anagram()">anagrams!</button>
			<button class="btn btn-success" type="submit" onclick="secondLetter()">secret message!</button></p>
		<p>Rearranged Text: <span id="shuffle" class="text-secondary"></span></p>
		<p>Anagram Text: <span id="margana" class="text-secondary"></span></p>
		<p>Secret Message: <span id="message"></span></p>

		<h3>Ruin a classic lyric</h3>
			<p><em>Remove one word at a time by scrolling.</em></p>
		<p id="holland">The only girl I've ever loved	was born with roses in her eyes but then they buried her alive	one evening 1945
		with just her sister at her side	And only weeks before the guns all came and rained on everyone	Now she's a
		little boy in Spain playing pianos filled with flames on empty rings around the sun all sing to say my dream has come.</p>

		<p><button class="btn btn-danger" type="submit" id="find and replace" onclick="textReplace(); textReplace2()">Ruin Lyrics</button></p>

			<h3>Add More Text!</h3>
		<p id="fillHere" class="text-danger"></p>
		<p><button class="btn btn-secondary" type="button" onclick="textInsert()">ADD MORE TEXT</button> </p>
		</div>
	</body>
</html>