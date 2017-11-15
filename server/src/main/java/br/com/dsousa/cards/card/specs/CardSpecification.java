package br.com.dsousa.cards.card.specs;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Predicate;

import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import br.com.dsousa.cards.card.domain.Card;

@Component
public class CardSpecification {
	
	public Specification<Card> matches(CardParameters params) {
		return (root, query, cb) -> {
			
			Root<Card> cardRoot = query.from(Card.class);
			cardRoot.join("tags");
						
			
			Set<String> sets = new HashSet<>();
			sets.add("3");
			
			return cb.equal(root.get("root.tags"), sets);
			 //CriteriaQuery<Card> teste = query.where`(root.get("tags.id").in(params.getTagId()));
			 //cb.createQuery();
			 //cb.in(root.get("tags.id").equals());
			
		};
	}
	
	String nome;
	
	public static void main(String []args) {
	
		class Pessoa { String nome; 	}
		
		Pessoa anyBody = new Pessoa();
		anyBody.nome = "Jack";
		
		Predicate<Pessoa> resp = p -> p.nome.equals("Jack");
		System.out.println(resp.test(anyBody));
			
	}
}

