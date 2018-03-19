package br.com.dsousa.cards.card.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dsousa.cards.card.converter.CardConverter;
import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.card.dto.CardDTO;
import br.com.dsousa.cards.card.service.CardService;

@RestController
@RequestMapping("rest/card")
public class CardController {

	@Autowired
	private CardService cardService;
	
	@Autowired
	private CardConverter cardConverter;
	
	@RequestMapping(method=RequestMethod.POST)
	private void save(@RequestBody final CardDTO cardDTO) {
		Card cardObject = null;
		cardObject = prepareCard(cardDTO);
		Card card = cardConverter.toModel(cardDTO, cardObject);
		cardService.save(card);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	private List<Card> getCard(@PathVariable final Long id) {
		return Arrays.asList(cardService.findCardById(id));
	}
	
	@RequestMapping(method=RequestMethod.GET)
	private List<Card> findAll(){
		return cardService.findAll();
	}
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.GET)
	private CardDTO find(@PathVariable final Long id) {
		Card card = cardService.findCardById(id);
		return cardConverter.toDTO(card);
	}
	
	private Card prepareCard(final CardDTO cardDTO) {
		Card cardObject;
		if (Objects.isNull(cardDTO.getId())) {
			cardObject = new Card();
		} else {
			cardObject = cardService.findCardById(cardDTO.getId());
		}
		return cardObject;
	}
}