package br.com.dsousa.cards.card.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.card.repository.CardRepository;
import br.com.dsousa.cards.tag.repository.TagRepository;

@RunWith(MockitoJUnitRunner.class)
public class CardServiceTest {
	
	@InjectMocks
	private CardService cardService;

	@Mock
	private TagRepository tagRepository;
	
	@Mock
	private CardRepository cardRepository;
	
	@Test
	public void verifyCallRepository() {
		Card card = new Card();
		cardService.save(card);
		Mockito.verify(cardRepository).save(card);
	}
	

}
