import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div
      class="container-fluid d-flex justify-content-center align-items-center bg-dark text-white"
    >
      <div>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div class="input-group input-group-lg">
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            placeholder="Enter Email"
          />
          <button class="btn btn-danger">
            Get Started <span class="bi bi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ['.container-fluid{height:100vh}'],
})
export class netflixRegister {}
