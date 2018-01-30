package br.com.dsousa.cards.card.specs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import br.com.dsousa.cards.card.domain.Card;

@Service
public class SpecificationService {
	
	@Autowired
	CardSpecification spec;
	
	@Autowired
	CardRepositorySpecification repository;
	
	public List<Card> findParameters(CardParameters params) {
		Specification<Card> card = spec.matches(params);
		return repository.findAll(card);
	}
}
