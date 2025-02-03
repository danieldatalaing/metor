import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-list',
  imports :[CommonModule],
  template: `

  `,
})
export class FileListComponent implements OnInit {
  files: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }
}
