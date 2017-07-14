<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link href="css/style.css" rel="stylesheet"></link>
</head>
<body>
	<form method="POST" action="/process">
		<input type="text" name="name" placeholder="Name"></input>
		<input type="text" name="loc" placeholder="Location"></input>
		<input type="text" name="lang" placeholder="Favorite Language"></input>
		<input type="text" name="comment" placeholder="Comment"></input>
		<input type="submit"></input>
	</form>
</body>
</html>
