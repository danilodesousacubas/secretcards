package br.com.dsousa.cards.card.specs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.com.dsousa.cards.card.domain.Card;

public interface CardRepositorySpecification extends JpaRepository<Card, Long>, JpaSpecificationExecutor<Card> {}

