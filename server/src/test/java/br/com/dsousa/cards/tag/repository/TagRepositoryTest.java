package br.com.dsousa.cards.tag.repository;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.dsousa.cards.tag.domain.Tag;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class TagRepositoryTest {

	private static final String TAG_NAME = "TAG";

	private static final long TAG_ID = 1l;

	@Autowired
	private TestEntityManager em;

	@Autowired
	private TagRepository tagRepository;

	@Before
	public void save() {
		Tag tag = new Tag();
		tag.setId(TAG_ID);
		tag.setName(TAG_NAME);

		this.em.persistAndFlush(tag);
	}

	@Test
	public void testFindByName(){
		Tag tag = tagRepository.findByName(TAG_NAME);
		assertEquals(TAG_NAME, tag.getName());
	}
	
	@Test
	public void testFindOne(){
		Tag tag = tagRepository.findOne(TAG_ID);
		assertEquals(TAG_NAME, tag.getName());
	}
}
