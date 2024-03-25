package demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.demo.model.contact;

public interface contactRepo extends JpaRepository <contact,Integer> {
    
}
