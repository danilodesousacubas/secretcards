package br.com.dsousa.cards.card.specs;

public class CardParameters {

	private Long cardId;
	private String[] tagsId;
	private Long tagId;
	
	public Long getCardId() {
		return cardId;
	}
	public void setCardId(Long cardId) {
		this.cardId = cardId;
	}
	public String[] getTagsId() {
		return tagsId;
	}
	public void setTagsId(String[] tagsId) {
		this.tagsId = tagsId;
	}
	public Long getTagId() {
		return tagId;
	}
	public void setTagId(Long tagId) {
		this.tagId = tagId;
	}
}
