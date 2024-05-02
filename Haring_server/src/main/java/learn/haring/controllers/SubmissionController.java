package learn.haring.controllers;

import learn.haring.domain.Result;
import learn.haring.domain.SubmissionService;
import learn.haring.models.Submission;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {

    private final SubmissionService service;

    public SubmissionController(SubmissionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Submission> findAll() {
        return service.findAll();
    }

    @GetMapping("/{submissionId}")
    public ResponseEntity<Submission> findById(@PathVariable int submissionId) {
        Submission submission = service.findById(submissionId);
        if (submission == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(submission);
    }

    @GetMapping("/appUser/{appUserId}")
    public List<Submission> findByAppUserId(@PathVariable int appUserId) {
        return service.findByAppUserId(appUserId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Submission submission) {
        Result<Submission> result = service.add(submission);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{submissionId}")
    public ResponseEntity<Object> update(@PathVariable int submissionId, @RequestBody Submission submission) {
        if (submissionId != submission.getSubmissionId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Submission> result = service.update(submission);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{submissionId}")
    public ResponseEntity<Void> deleteById(@PathVariable int submissionId) {
        if (service.deleteById(submissionId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



}
