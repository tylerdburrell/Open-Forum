package com.open.forum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Category {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String slashTitle;
	private String title;
	private String flavorText;
	private String imageURL;
	
	Category() {}

	
	public Category(String slashTitle, String title, String flavorText, String imageURL) {
		this.slashTitle = slashTitle;
		this.title = title;
		this.flavorText = flavorText;
		this.imageURL = imageURL;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSlashTitle() {
		return slashTitle;
	}

	public void setSlashTitle(String slashTitle) {
		this.slashTitle = slashTitle;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFlavorText() {
		return flavorText;
	}

	public void setFlavorText(String flavorText) {
		this.flavorText = flavorText;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	
	

}
