package br.com.dsousa.cards.card.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

import br.com.dsousa.cards.tag.domain.Tag;

@Entity
@Table(name="card")
public class Card {

	@Id
	@SequenceGenerator(name="seq_card", sequenceName="seq_card", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq_card")
	private Long id;
	
	@Column
	private String title;
	
	@Column(length=10485760)
	private String description;

	@ManyToMany(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinTable(name = "cards_tags")
	public Set<Tag> tags = new HashSet<>();

	@Column
	@Version
	public Long version;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<Tag> getTags() {
		return tags;
	}

	public void setTags(Set<Tag> tags) {
		this.tags = tags;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	
}