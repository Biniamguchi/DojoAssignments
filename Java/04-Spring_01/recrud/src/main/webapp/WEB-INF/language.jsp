<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

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
				<th>Name</th>
				<th>Creator</th>
				<th>Version</th>
			</tr>
			
			<c:forEach items="${languages}" var="language" varStatus="loop">
				<tr>
					<td><a href="/languages/show/${loop.index}"><c:out value="${language.name}"/></a></td>
					<td><c:out value="${language.creator}"/></td>
					<td><c:out value="${language.version}"/></td>
					<td><a href="/languages/edit/${loop.index}">Edit</a></td>
					<td><a href="/languages/delete/${loop.index}">Delete</a></td>
				</tr>
			</c:forEach>
		</table>
		
		<form:form action="/languages/new" method="POST" modelAttribute="language">
			<form:label path="name">Name
				<form:input path="name"></form:input>
				<form:errors path="name"></form:errors>			
			</form:label>

			<form:label path="creator">Creator
				<form:input path="creator"></form:input>
				<form:errors path="creator"></form:errors>			
			</form:label>

			<form:label path="version">Version
				<form:input path="version"></form:input>
				<form:errors path="version"></form:errors>			
			</form:label>

			<input type="submit"></input>
		</form:form>
	</body>
</html>