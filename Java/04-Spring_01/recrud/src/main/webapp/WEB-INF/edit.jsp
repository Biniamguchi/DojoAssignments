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
	
		<form:form action="/languages/update/${id}" method="POST" modelAttribute="language">
			<form:label path="name">Name
				<form:input path="name" value="${language.name}"></form:input>
				<form:errors path="name"></form:errors>			
			</form:label>

			<form:label path="creator">Creator
				<form:input path="creator" value="${language.creator}"></form:input>
				<form:errors path="creator"></form:errors>			
			</form:label>

			<form:label path="version">Version
				<form:input path="version" value="${language.version}"></form:input>
				<form:errors path="version"></form:errors>			
			</form:label>

			<input type="submit"></input>
		</form:form>
	</body>
</html>