package br.com.dsousa.cards.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.dsousa.cards.tag.domain.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
	
	@Query("select tag from Tag tag where tag.name like ?1")	
	Tag findByName(String name);
}
