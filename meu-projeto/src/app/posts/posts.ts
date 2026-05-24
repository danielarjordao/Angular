import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {}
