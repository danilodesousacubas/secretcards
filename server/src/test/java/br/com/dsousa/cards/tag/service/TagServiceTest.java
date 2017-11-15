package br.com.dsousa.cards.tag.service;

import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.repository.TagRepository;

@RunWith(MockitoJUnitRunner.class)
public class TagServiceTest {

	private static final String TAG_DESCRIPTION = "123";

	@InjectMocks
	private TagService tagService;

	@Mock
	private TagRepository tagRepository;
	
	@Test
	public void shouldCallRepositoryFindOne() {
		tagService.findById(2l);
		verify(tagRepository).findOne(2l);
	}

	@Test
	public void shouldCallRepositorySave() {
		Tag tag = new Tag();
		tag.setName(TAG_DESCRIPTION);
		
		tagService.save(tag);
		verify(tagRepository).save(tag); 
	}
	
	@Test
	public void shouldCallFindAllRepository(){
		tagService.findAll();
		verify(tagRepository).findAll();
	}
	
	@Test
	public void shouldFind(){
		Tag tag = new Tag();
		tag.setId(1l);
		Mockito.when(tagService.findById(Mockito.any())).thenReturn(tag);
		
		tagService.update(tag);
		
		verify(tagRepository).findOne(tag.getId());
		verify(tagRepository).save(tag);
		
	}
}
