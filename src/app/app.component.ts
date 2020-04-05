import { Component, ViewChild, OnInit } from '@angular/core';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import AOS from 'aos';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'spa1';
  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;

  ngOnInit() {
    $(function () {
      AOS.init({
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'animated',
        once : true
      });
    });

    $(".container-fluid").on('scroll', function () {
      AOS.refresh();
    });
  }
}
