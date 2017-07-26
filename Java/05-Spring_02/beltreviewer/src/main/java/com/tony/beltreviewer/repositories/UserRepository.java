package com.tony.beltreviewer.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tony.beltreviewer.models.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long>{
	public User findByEmail(String email);
}
