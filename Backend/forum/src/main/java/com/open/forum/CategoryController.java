package com.open.forum;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="https://localhost:3000")
class CategoryController {

  private final CategoryRepository repository;

  CategoryController(CategoryRepository repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/Category")
  List<Category> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]

  @PostMapping("/Category")
  Category newCategory(@RequestBody Category newCategory) {
    return repository.save(newCategory);
  }

  // Single item
  
  @GetMapping("/Category/{id}")
  Optional<Category> one(@PathVariable Long id) {
    
    return repository.findById(id);
//      .orElseThrow(() -> new CategoryNotFoundException(id));
  }

  @PutMapping("/Category/{id}")
  Category replaceCategory(@RequestBody Category newCategory, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Category -> {
    	Category.setSlashTitle(newCategory.getSlashTitle());
        Category.setTitle(newCategory.getTitle());
        Category.setFlavorText(newCategory.getFlavorText());
        Category.setImageURL(newCategory.getImageURL());
        return repository.save(Category);
      })
      .orElseGet(() -> {
        newCategory.setId(id);
        return repository.save(newCategory);
      });
  }

  @DeleteMapping("/Categorys/{id}")
  void deleteCategory(@PathVariable Long id) {
    repository.deleteById(id);
  }
}