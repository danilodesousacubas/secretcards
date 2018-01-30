package br.com.dsousa.cards.tag.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.persistence.Version;

@Entity
@Table(name="tag", uniqueConstraints = @UniqueConstraint(columnNames = "name"))
public class Tag {

	@Id
	@SequenceGenerator(name="seq_tag", sequenceName="seq_tag", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator= "seq_tag")
	private Long id;
	
	@Column
	public String name;
		
	@Column
	@Version
	public Long version;
	
	public Tag(){};
	
	public Tag(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Tag [id=" + id + ", name=" + name + ", version=" + version + "]";
	}
}