package br.com.dsousa.cards.tag.converter;

import java.util.Objects;

import org.springframework.stereotype.Service;

import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.dtos.TagDTO;

@Service
public class TagConverter {

	public TagDTO toDTO(final Tag tag){
		
		if(Objects.isNull(tag)){return null;}
		
		TagDTO tagDTO = new TagDTO();
		tagDTO.setId(tag.getId());
		tagDTO.setName(tag.getName());
		
		return tagDTO;
	}
	
}
