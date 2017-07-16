package com.tony.recrud.models;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Language{
	@Size(min=2,max=20,message="Name must be between 0-20 characters.")
	private String name;
	@Size(min=2,max=20,message="Creator must be between 0-20 characters.")
	private String creator;
	@NotNull(message="Version cannot be null.")
	private double version;
	
	public Language(){}
	
	public void setName(String name){this.name = name;}
	public String getName(){return name;}
	
	public void setCreator(String creator){this.creator = creator;}
	public String getCreator(){return creator;}
	
	public void setVersion(double version){this.version = version;}
	public double getVersion(){return version;}
}
