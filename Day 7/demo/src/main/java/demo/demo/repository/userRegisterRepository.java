package demo.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.demo.model.UserRegister;

public interface userRegisterRepository extends JpaRepository<UserRegister,Integer> {

    Optional<UserRegister>findByUsername(String username);
    
}
