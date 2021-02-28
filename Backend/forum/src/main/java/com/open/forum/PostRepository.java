package com.open.forum;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findByCategory(String category);
}
