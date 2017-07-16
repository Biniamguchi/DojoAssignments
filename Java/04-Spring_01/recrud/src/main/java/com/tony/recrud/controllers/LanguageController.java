package com.tony.recrud.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tony.recrud.models.Language;
import com.tony.recrud.services.LanguageService;

@Controller
@RequestMapping("/languages")
public class LanguageController{
	private LanguageService languageService;	
	
	public LanguageController(LanguageService languageService){
		this.languageService = languageService;
	}
	
	@RequestMapping("")
	public String Languages(Model model){
		model.addAttribute("language",new Language());
		model.addAttribute("languages",languageService.all());
		return "language";
	}
	
	@PostMapping("/new")
	public String create(@Valid @ModelAttribute("language") Language language,BindingResult res,RedirectAttributes flash){
		if(res.hasErrors()){
			flash.addFlashAttribute("errs",res.getAllErrors());
		}else{
			languageService.create(language);
		}
		return "redirect:/languages";
	}

	@RequestMapping("/show/{id}")
	public String show(@PathVariable("id") int id,Model model){
		model.addAttribute("language",languageService.getByIndex(id));
		return "show";
	}
	
	@RequestMapping("/edit/{id}")
	public String edit(@PathVariable("id") int id,Model model){
		model.addAttribute("language",languageService.getByIndex(id));
		return "edit";
	}
	
	@PostMapping("/update/{id}")
	public String update(@Valid @ModelAttribute("language") Language language,BindingResult res,RedirectAttributes flash,@PathVariable("id") int id){
		if(res.hasErrors()){
			flash.addFlashAttribute("errs",res.getAllErrors());
			return "redirect:/languages/edit/"+id;
		}else{
			languageService.update(id, language);
			return "redirect:/languages";
		}
	}
	
	@RequestMapping("/delete/{id}")
	public String destroy(@PathVariable("id") int id){
		languageService.destroy(id);
		return "redirect:/languages";
	}
}
