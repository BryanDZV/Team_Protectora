import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [RouterLink, NavBarComponent],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
})
export class OptionComponent {}
