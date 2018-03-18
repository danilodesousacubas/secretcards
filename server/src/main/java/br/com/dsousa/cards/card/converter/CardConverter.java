package br.com.dsousa.cards.card.converter;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.card.dto.CardDTO;
import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.service.TagService;

@Service
public class CardConverter {

	@Autowired
	private TagService tagService;
	
	public CardDTO toDTO(Card card){
		CardDTO dto = new CardDTO();
		dto.setId(card.getId());
		dto.setTitle(card.getTitle());
		dto.setDescription(card.getDescription());
		dto.setTags(createTagIds(card.getTags()));
		return dto;
	}
	
	public Card toModel(final CardDTO cardDTO, final Card card){
		card.setId(cardDTO.getId());
		card.setDescription(cardDTO.getDescription());
		card.setTags(parseSetTags(cardDTO.getTags()));
		card.setTitle(cardDTO.getTitle());
		return card;
	}
	
	public Set<Tag> parseSetTags(final Set<String> tags){
		return tags.stream().map(tag-> createdTag(tag)).collect(Collectors.toSet());
	}
	
	public Tag createdTag(String name){
		return tagService.findByName(name);
	}
	
	public Set<String> createTagIds(Set<Tag> tags){
		return tags.stream().map(x-> x.getName()).collect(Collectors.toSet());
	}
}