import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements OnInit {
  constructor() {}
  public ThenBlock: TemplateRef<any> | null = null;

  @ViewChild('Template1', { static: true })
  public Template1: TemplateRef<any> | null = null;
  @ViewChild('Template2', { static: true })
  public Template2: TemplateRef<any> | null = null;
  @ViewChild('Template3', { static: true })
  public Template3: TemplateRef<any> | null = null;

  ngOnInit(): void {
    this.ThenBlock = this.Template3;
  }
}
