import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  messageForm: UntypedFormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  // onSubmit method called when user submits the form
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }
}
