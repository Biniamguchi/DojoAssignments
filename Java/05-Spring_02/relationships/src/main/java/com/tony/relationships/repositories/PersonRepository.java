package com.tony.relationships.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tony.relationships.models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person,Long>{

}
