import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { XlsxService, XlsxConfig, DA_XLSX_CONFIG } from "./xlsx.service";
import { XlsxDirective } from "./xlsx.directive";
const COMPONENTS = [XlsxDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AdXlsxModule {}
