package br.com.dsousa.cards.card.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.card.service.CardService;
import br.com.dsousa.cards.card.specs.CardParameters;

@RestController
@RequestMapping(value="/rest/search")
public class SearchCardsController {
	
	@Autowired
	private CardService cardService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Card> searchCardByTag(final CardParameters parameters) {
		return cardService.getCardsByTag(parameters);
	}
}