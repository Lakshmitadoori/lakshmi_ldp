package com.sso.assignment.service.impl;


import com.sso.assignment.dto.AuthenticationRequest;
import com.sso.assignment.dto.AuthenticationResponse;
import com.sso.assignment.dto.RegisterRequest;
import com.sso.assignment.entity.Role;
import com.sso.assignment.entity.User;
import com.sso.assignment.exception.UserNotFoundException;
import com.sso.assignment.repository.UserRepository;
import com.sso.assignment.service.JwtService;
import com.sso.assignment.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponse register(RegisterRequest request) {
        User user = modelMapper.map(request, User.class);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
        String token = jwtService.generateToken(user);
        return new AuthenticationResponse(token);
    }

    @Override
    public AuthenticationResponse login(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UserNotFoundException("user not found by email:" + request.getEmail()));
        String token = jwtService.generateToken(user);
        return new AuthenticationResponse(token);
    }
}
