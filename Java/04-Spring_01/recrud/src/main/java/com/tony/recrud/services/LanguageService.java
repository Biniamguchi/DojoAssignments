package com.tony.recrud.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.tony.recrud.models.Language;

@Service
public class LanguageService {
	private ArrayList<Language> languages = new ArrayList<>();
	
	public LanguageService(){}
	
	public ArrayList<Language> all(){
		return languages;
	}
	
	public Language getByIndex(int id){
		if(id >= 0 && id < languages.size()){
			return languages.get(id);
		}else{
			return null;
		}
	}
	
	public void create(Language language){
		languages.add(language);
	}
	
	public void update(int id,Language language){
		if(id >= 0 && id < languages.size()){
			languages.set(id,language);
		}
	}
	
	public void destroy(int id){
		if(id >= 0 && id < languages.size()){
			languages.remove(id);
		}
	}
}
