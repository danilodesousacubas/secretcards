package br.com.dsousa.cards.card.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.dsousa.cards.card.domain.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

	@Query("select  distinct card from Card card inner join fetch card.tags tag where tag.id = ?1")
	public List<Card> getFindCards(Long id);
}
