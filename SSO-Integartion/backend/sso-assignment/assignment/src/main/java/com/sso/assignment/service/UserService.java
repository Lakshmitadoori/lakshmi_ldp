package com.sso.assignment.service;

import com.sso.assignment.dto.AuthenticationRequest;
import com.sso.assignment.dto.AuthenticationResponse;
import com.sso.assignment.dto.RegisterRequest;

public interface UserService {
    public AuthenticationResponse register(RegisterRequest request);

    public AuthenticationResponse login(AuthenticationRequest request);
}
