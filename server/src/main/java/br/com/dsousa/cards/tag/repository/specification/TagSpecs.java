package br.com.dsousa.cards.tag.repository.specification;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import br.com.dsousa.cards.tag.domain.Tag;

@Component
public class TagSpecs {

	public Specification<Tag> matches(final String name) {
		return new Specification<Tag>() {

			public Predicate toPredicate(Root<Tag> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
				List<Predicate> predicates = new ArrayList<>();

				matchName(name, builder, root, predicates);

				if (predicates.isEmpty()) {
					return null;
				}
				return builder.and(predicates.toArray(new Predicate[predicates.size()]));
			}
		};
	}

	private void matchName(String name, CriteriaBuilder builder, Root<Tag> root, List<Predicate> predicates ) {		
		
			predicates.add(builder.like(root.get("name"), name));
		
	}
}
