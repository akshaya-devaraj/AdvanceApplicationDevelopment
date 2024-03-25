package demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.demo.model.billing;

public interface billingRepo extends JpaRepository <billing,Integer> {
    
}
