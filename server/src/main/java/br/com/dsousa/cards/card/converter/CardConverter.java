package br.com.dsousa.cards.card.converter;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.card.dto.CardDTO;
import br.com.dsousa.cards.card.service.CardService;
import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.service.TagService;

@Service
public class CardConverter {

	@Autowired
	private TagService tagService;
	
	@Autowired
	private CardService cardService;
	
	public CardDTO toDTO(){
		return new CardDTO();
	}
	
	public Card toModel(final CardDTO cardDTO){
		
		Card card = cardService.findCardById(cardDTO.getId()); 
		card.setId(cardDTO.getId());
		card.setDescription(cardDTO.getDescription());
		card.setTags(createTags(cardDTO.getTags()));
		
		return card;
	}
	
	public Set<Tag> createTags(final Set<String> tags){
		return tags.stream().map(x-> createOneTag(x)).collect(Collectors.toSet());
	}
	
	public Tag createOneTag(String id){
		return tagService.findById(Long.parseLong(id));
	}
}