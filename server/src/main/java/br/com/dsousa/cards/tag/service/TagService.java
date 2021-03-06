package br.com.dsousa.cards.tag.service;

import java.util.List;
import java.util.Objects;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import br.com.dsousa.cards.tag.domain.Tag;
import br.com.dsousa.cards.tag.repository.TagRepository;

@Service
@Transactional
public class TagService {

	@Autowired
	private TagRepository tagRepository;

	public Tag findByName(final String name) {
		return tagRepository.findByName(name);
	}

	public Tag findById(final Long id) {
		return tagRepository.findOne(id);
	}

	public Tag save(final Tag tag) {
		return tagRepository.save(tag);
	}

	public Tag update(final Tag tag) {
		Tag tagPersisted = tagRepository.findOne(tag.getId());

		if (Objects.isNull(tag)) {
			return null;
		}
		tagPersisted.setName(tag.getName());

		return tagRepository.save(tagPersisted);
	}

	public List<Tag> findAll() {
		return tagRepository.findAll();
	}
	
	public List<Tag> findAllOrder() {
		return tagRepository.findAll(new Sort(Direction.ASC, "name"));
	}
	
}