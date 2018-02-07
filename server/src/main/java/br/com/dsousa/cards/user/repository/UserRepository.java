package br.com.dsousa.cards.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.dsousa.cards.user.domain.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("select  distinct user from User user where user.login = ?1")
	public User getUser(Long id);
}