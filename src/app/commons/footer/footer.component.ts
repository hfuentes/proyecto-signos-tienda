import { Component, OnInit } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';
import { Link } from 'src/app/domain/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks: Link[];
  footerRedes: Link[];
  constructor(private linkService: LinksService) { }
  ngOnInit() {
    this.loadLinks();
    this.loadRedes();
  }
  loadLinks(): void {
    this.footerLinks = this.linkService.getLinks();  
  }
  loadRedes(): void {
    this.footerRedes = this.linkService.getRedes();
  }
}
