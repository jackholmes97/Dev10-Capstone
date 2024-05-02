package learn.haring.controllers;
import learn.haring.domain.Result;
import learn.haring.models.Comment;
import learn.haring.domain.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService service;

    public CommentController(CommentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Comment> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable int id) {
        Comment comment = service.findById(id);
        if(comment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(comment);
    }

    @GetMapping("/submission/{submissionId}")
    public List<Comment> findBySubmissionId(@PathVariable int submissionId) {
        return service.findBySubmissionId(submissionId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Comment comment) {
        Result<Comment> result = service.add(comment);
        if(result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable int id) {
        if(service.deleteById(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
