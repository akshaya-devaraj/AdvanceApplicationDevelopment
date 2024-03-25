package demo.demo.service;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import demo.demo.dto.request.authenticationRequest;
import demo.demo.dto.request.registerRequest;
import demo.demo.dto.response.authenticationResponse;
import demo.demo.enumerated.role;
import demo.demo.model.UserRegister;
import demo.demo.repository.userRegisterRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class authenticationService {
	
	private final userRegisterRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final jwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
	public authenticationResponse register(registerRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = UserRegister.builder()
	            .username(request.getUsername())
	            .emailid(request.getEmailid())
	            .mobileno(request.getMobileno())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .rol(role.USER)
	            .build();
	    repository.save(user); 
	    var jwtToken = jwtservice.generateToken(user);
	    
		return authenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public authenticationResponse authenticate(authenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getUsername(),
				request.getPassword()
				)
				);
				var user = repository.findByUsername(request.getUsername())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return authenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	
	 public List<UserRegister> getAllUsers() {
	        return repository.findAll();
	    }
	
	

}