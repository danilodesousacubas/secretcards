package br.com.dsousa.cards.card.repository;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.util.collections.Sets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.dsousa.cards.card.domain.Card;
import br.com.dsousa.cards.tag.domain.Tag;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)

public class CardRepositoryTest {

	private static final String CARD_1 = "Card 1";
	private static final String CARD_2 = "Card 2";

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private CardRepository cardRepository;
	
	@Before
	public void before() {
		ZoneId sp = ZoneId.of("America/Sao_Paulo");
		
		LocalDateTime dateTime = LocalDateTime.of(2014, 02, 20, 12, 0);
		ZonedDateTime spDateTime = ZonedDateTime.of(dateTime, sp);

		LocalDateTime dateTime_2 = LocalDateTime.of(2011, 02, 20, 12, 0);
		ZonedDateTime spDateTime_2 = ZonedDateTime.of(dateTime_2, sp);
				
		Tag tag = new Tag();
		tag.setId(1l);
		tag.setName("tag1");
		
		Set<Tag> tags = Sets.newSet(tag);
		
		Card card = new Card();
		card.setId(1l);
		card.setModifiedDate(spDateTime);
		card.setDescription(CARD_1);
		card.setTags(tags);
		
		Card card_2 = new Card();
		card_2.setId(1l);
		card_2.setModifiedDate(spDateTime_2);
		card_2.setDescription(CARD_2);
		card_2.setTags(tags);
		
		this.entityManager.persistAndFlush(card);
		this.entityManager.persistAndFlush(card_2);
	}
	
	@Test
	public void test() {
		List<Card> cards = cardRepository.findAll();
		Card card = cards.stream().findFirst().get();
		
		assertTrue(!cards.isEmpty());
		assertEquals(card.getDescription(), CARD_2);
		
		
		
		
		
		
	}
			
}
