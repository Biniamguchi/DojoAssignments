<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE HTML>
<html>
	<head>
		<title>Languages</title>
	</head>
	
	
	<body>
		<c:forEach items="${errs}" var="err">
			<h2><c:out value="${err.getDefaultMessage()}"/></h2>
		</c:forEach>
	
		<table>
			<tr>
				<th>Name: </th>
				<th>Creator: </th>
				<th>Version: </th>
				<th>Action: </th>
			</tr>
			
			<c:forEach items="${languages}" var="language" varStatus="loop">
				<tr>
					<td><h2><a href="/languages/show/${loop.index}">"${language.name}"</a></h2></td>
					<td><h2><c:out value="${language.creator}"/></h2></td>
					<td><h2><c:out value="${language.version}"/></h2></td>
					<td><h2> <a href="/languages/edit/${loop.index}">Edit</a> <a href="/languages/delete/${loop.index}">Delete</a> </h2></td>
				</tr>
			</c:forEach>
		</table>
		
		<form:form method="post" action="/languages/test" modelAttribute="language">
			<form:label path="name">
				<form:input path="name"></form:input>
				<form:errors path="name"></form:errors>
			</form:label>
			
			<form:label path="creator">
				<form:input path="creator"></form:input>
				<form:errors path="creator"></form:errors>
			</form:label>
			
			<form:label path="version">
				<form:input path="version"></form:input>
				<form:errors path="version"></form:errors>
			</form:label>
			
			<input type="submit"></input>
		</form:form>
	</body>
</html>