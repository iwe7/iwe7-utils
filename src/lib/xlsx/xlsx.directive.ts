import { Directive, HostListener, Input } from "@angular/core";
import { XlsxService, XlsxExportOptions } from "./xlsx.service";

@Directive({ selector: "[xlsx]" })
export class XlsxDirective {
  @Input("xlsx") data: XlsxExportOptions;
  constructor(private srv: XlsxService) {}
  @HostListener("click")
  _click() {
    this.srv.export(this.data);
  }
}
