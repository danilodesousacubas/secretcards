package br.com.dsousa.cards.card.service;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.card.repository.CardRepository;
import br.com.dsousa.cards.card.specs.CardParameters;
import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.repository.TagRepository;

@Service
public class CardService {

	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
	public Card save(final Card card){
		
		Set<Tag> tagsUpdate = new HashSet<>();
		
		saveOrUpdateTags(card, tagsUpdate);
		
		if(!tagsUpdate.isEmpty()){
			card.setTags(tagsUpdate);
		}

		return cardRepository.saveAndFlush(card);
	}

	private void saveOrUpdateTags(final Card card, Set<Tag> tagsUpdate) {
		card.tags.stream().forEach(x -> {
			
			Tag tag = findTagByName(x.getName());
			
			if(!Objects.isNull(tag)) {
				tagsUpdate.add(tag);
			} else {
				tagsUpdate.add(new Tag(null, x.getName()));
			}
		});
	}
	
	public Card update(Card card) {
//		Card temp = findCardById(card.getId());
		
//		 Set<Tag> tagsDoBanco = temp.getTags();
//		 Set<Tag> tagsDaTela = card.getTags();

		 
//		 saveOrUpdateTags(temp, tagsDoBanco);
//		 temp.setTags(tagsDoBanco);
//		 cardRepository.save(temp);
		 
//		 saveOrUpdateTags(temp, tagsDaTela);
//		 temp.setTags(tagsDaTela);
		 cardRepository.save(card);
		 
//		 tudo.addAll(tagsDoBanco);
//		 tudo.addAll(tagsDaTela);
		
		return card;
	}
	
	public Card findCardById(Long id){
		return cardRepository.findOne(id);
	}
	
	public Tag findTagByName(String name){
		return tagRepository.findByName(name);
	}
	
	public List<Card> findAll() {
		return cardRepository.findAll();
	}
	
	public List<Card> getCardsByTag(CardParameters params){
		return cardRepository.getFindCards(params.getTagId());
	}
}