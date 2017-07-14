<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title>Result</title>
</head>
<body>
	<h1>Submitted Info:</h1>
	
	<h2>Name: <c:out value="${name}"/></h2>
	<h2>Dojo Location: <c:out value="${loc}"/></h2>
	<h2>Favorite Language: <c:out value="${lang}"/></h2>
	<h2>Comment: <c:out value="${comment}"/></h2>
</body>
</html>