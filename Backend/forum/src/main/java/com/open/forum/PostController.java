package com.open.forum;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class PostController {

  private final PostRepository repository;

  PostController(PostRepository repository) {
    this.repository = repository;
  }


  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/Posts")
  List<Post> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]

  @PostMapping("/Posts")
  Post newPost(@RequestBody Post newPost) {
    return repository.save(newPost);
  }

  // Single item
  
  @GetMapping("/Posts/{id}")
  Optional<Post> one(@PathVariable Long id) {
    
    return repository.findById(id);
//      .orElseThrow(() -> new PostNotFoundException(id));
  }

  @PutMapping("/Posts/{id}")
  Post replacePost(@RequestBody Post newPost, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(Post -> {
    	Post.setCategory(newPost.getCategory());
        Post.setTitle(newPost.getTitle());
        Post.setContent(newPost.getContent());
        return repository.save(Post);
      })
      .orElseGet(() -> {
        newPost.setId(id);
        return repository.save(newPost);
      });
  }

  @DeleteMapping("/Posts/{id}")
  void deletePost(@PathVariable Long id) {
    repository.deleteById(id);
  }
}
