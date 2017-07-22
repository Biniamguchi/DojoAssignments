package com.tony.auth.controllers;

import java.security.Principal;
import java.util.Date;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tony.auth.models.User;
import com.tony.auth.services.UserService;
import com.tony.auth.validations.UserValidator;

@Controller
public class UserController {
	private UserService   userService;
	private UserValidator userValidator;
	
	public UserController(UserService userService,UserValidator userValidator){
		this.userService = userService;
		this.userValidator = userValidator;
	}

	@RequestMapping(value={"/login","/register"})
	public String login_register(@RequestParam(value="error", required=false) String error, @RequestParam(value="logout", required=false) String logout, Model model){
        if(error != null) {
            model.addAttribute("errorMessage", "Invalid Credentials.");
        }
        if(logout != null) {
            model.addAttribute("logoutMessage", "Logout Successfull!");
        }
        model.addAttribute("user",new User());
		return "login_register";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("user") User user,BindingResult res,Model model){
		userValidator.validate(user,res);
		if(res.hasErrors()){return "login_register";}
		userService.saveWithUserRole(user);
		return "redirect:/login";
	}
	
	@RequestMapping(value={"/","/dashboard"})
	public String dashboard(Principal principal,Model model){
		String email = principal.getName();
		User user = userService.findByEmail(email);
		userService.update(user); //Force onUpdate(), yielding new updatedAt for last sign-in via .jsp
		model.addAttribute("currentUser",user);
		return "dashboard";
	}
}
