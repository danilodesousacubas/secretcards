package br.com.dsousa.cards.tag.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import br.com.dsousa.cards.tag.converter.TagConverter;
import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.dtos.TagDTO;
import br.com.dsousa.cards.tag.service.TagService;


@RunWith(MockitoJUnitRunner.class)
public class TagControllerTest {

	private static final long TAG_ID = 1l;
	
	@InjectMocks
	private TagController tagController;
	
	@Mock
	private TagService tagService;
	
	@Mock
	private TagConverter tagConverter;
	
	@Test
	public void shouldFindTag() {

		Mockito.when(tagService.findById(Mockito.anyLong())).thenReturn(getTag());

		tagController.findTag(TAG_ID);
		
		Mockito.verify(tagService).findById(TAG_ID);
		Mockito.verify(tagConverter).toDTO(Mockito.any(Tag.class));
		
	}
	
	private TagDTO getTagDTO(){
		TagDTO tagDTO = new TagDTO();
		tagDTO.setId(1l);
		tagDTO.setName("name da tag");
		
		return tagDTO;
	}
	
	private Tag getTag(){
		Tag tag = new Tag();
		tag.setId(1l);
		tag.setName("teste");
				
		return tag;
	}
}
