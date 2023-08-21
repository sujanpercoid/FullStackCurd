import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-common',
  template:`
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand"routerLink="/items">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" routerLink="/employees">Employees</a>
        <a class="nav-link active" aria-current="page" routerLink="/employees/add">Add Employees</a>
      </div>
    </div>
    <li class="nav-item dropdown" style="display:flex;">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white;">
          Link
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
  </div>
</nav>
  `
})
export class CommonComponent {
  @Input() UserName !: string;

}
