import { Component, OnInit } from '@angular/core';
import { Link } from 'client/app/domain/link';
import { LinksService } from 'client/app/services/links.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLinks: Link[];
  constructor(private linksService: LinksService) { }
  loadLinks(): void {
    this.headerLinks = this.linksService.getLinks();
  }
  ngOnInit() {
    this.loadLinks();
  }

}