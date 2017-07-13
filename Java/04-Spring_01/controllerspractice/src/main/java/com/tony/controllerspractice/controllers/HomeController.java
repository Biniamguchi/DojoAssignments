package com.tony.controllerspractice.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController{
	@RequestMapping("/")
	public String index(){
		return "index.html";
	}

	@RequestMapping("/me")
	public String me(){
		return "me.html";
	}
}
