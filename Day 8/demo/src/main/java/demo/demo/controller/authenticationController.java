package demo.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.demo.dto.request.authenticationRequest;
import demo.demo.dto.request.registerRequest;
import demo.demo.dto.response.authenticationResponse;
import demo.demo.model.UserRegister;
import demo.demo.repository.userRegisterRepository;
import demo.demo.service.authenticationService;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class authenticationController {
	@Autowired
	private final userRegisterRepository userrepo;
	private final authenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody registerRequest request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
		  @PostMapping("/authenticate")
		  public ResponseEntity<authenticationResponse> authenticate(
		      @RequestBody authenticationRequest request
		  ) {
		    return ResponseEntity.ok(service.authenticate(request));
		  }
		  
		  @GetMapping("/getregister")
			public List<UserRegister> getregister()
			{
				return userrepo.findAll();
				
			}
		  

}