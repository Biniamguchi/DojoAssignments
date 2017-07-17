package com.tony.crud2.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tony.crud2.models.Language;
import com.tony.crud2.services.LanguageService;

@Controller
@RequestMapping("/languages")
public class LanguageController {
	private LanguageService languageService;
	
	public LanguageController(LanguageService languageService){
		this.languageService = languageService;
	}
	
	@RequestMapping("")
	public String languages(Model model){		
		model.addAttribute("language",new Language());
		model.addAttribute("languages",languageService.all());
		return "languages";
	}
	
	@RequestMapping(path="/test",method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("language") Language language,BindingResult res,RedirectAttributes flash){
		if(res.hasErrors()){
			flash.addAttribute("errs",res.getAllErrors());
		}else{
			languageService.create(language);
		}
		return "redirect:/languages";
	}
}
