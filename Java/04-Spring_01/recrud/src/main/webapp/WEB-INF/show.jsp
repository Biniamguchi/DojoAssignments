<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE HTML>
<html>
	<head>
		<title>Show Language</title>
	</head>
	
	<body>
		<h2><a href="/languages">Dashboard</a></h2>
	
		<h2>Name: <c:out value="${language.name}"/></h2>
		<h2>Creator: <c:out value="${language.creator}"/></h2>
		<h2>Version: <c:out value="${language.version}"/></h2>
		
		<h2><a href="/languages/edit/${id}">Edit</a></h2>
		<h2><a href="/languages/delete/${id}">Delete</a></h2>
	</body>
</html>