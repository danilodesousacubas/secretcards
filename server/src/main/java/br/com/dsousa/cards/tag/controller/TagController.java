package br.com.dsousa.cards.tag.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dsousa.cards.tag.converter.TagConverter;
import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.dtos.TagDTO;
import br.com.dsousa.cards.tag.service.TagService;

@RestController
@RequestMapping("rest/tag")
public class TagController {

	private final static Logger LOGGER = LoggerFactory.getLogger(TagController.class);

	@Autowired
	private TagService tagService;  
	
	@Autowired
	private TagConverter tagConverter; 
	
	@RequestMapping(value="/{id}", method=GET)
	public TagDTO findTag(final @PathVariable("id") Long id) {  
		LOGGER.info("Tag find by id");
		
		return tagConverter.toDTO(tagService.findById(id));
	}
	
	@RequestMapping(method=POST)
	public TagDTO save(final @RequestBody Tag tag) { 
		LOGGER.info("salvar tag" + tag);

		return tagConverter.toDTO(tagService.save(tag));
	}

	@RequestMapping(method=PUT)
	public TagDTO update(final @RequestBody Tag tag) {
		
		return tagConverter.toDTO(tagService.update(tag));
	}
	
	@RequestMapping(method=GET)
	public List<Tag> findAll() {  
		return tagService.findAllOrder();
	}
}
