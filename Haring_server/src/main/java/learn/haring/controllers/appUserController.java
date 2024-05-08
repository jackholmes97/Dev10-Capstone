package learn.haring.controllers;

import learn.haring.models.AppUser;
import learn.haring.security.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appUsers")
public class appUserController {
    private final AppUserService service;

    public appUserController(AppUserService service) {
        this.service = service;
    }

    @GetMapping("/{username}")
    public ResponseEntity<Object> findByUsername(@PathVariable String username) {
        AppUser user = (AppUser) service.loadUserByUsername(username);
        if(user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(user);
    }
}
