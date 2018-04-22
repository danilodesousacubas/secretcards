package br.com.dsousa.cards.utils;

import java.time.ZoneId;
import java.time.ZonedDateTime;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class ZonedDateTimePersistenceConverter implements AttributeConverter<ZonedDateTime, java.sql.Timestamp> {

	@Override
	public java.sql.Timestamp convertToDatabaseColumn(ZonedDateTime entityValue) {
		if (entityValue != null) {
			return java.sql.Timestamp.from(entityValue.toInstant());
		}
		return null;
	}

	@Override
	public ZonedDateTime convertToEntityAttribute(java.sql.Timestamp databaseValue) {
		if (databaseValue != null) {
			return ZonedDateTime.ofInstant(databaseValue.toInstant(), ZoneId.of("+0000"));
		}
		return null;
	}
}

