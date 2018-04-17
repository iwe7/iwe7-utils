import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CNCurrencyPipe } from "./cn-currency.pipe";
import { KeysPipe } from './keys.pipe';
import { YNPipe } from './yn.pipe';
const PIPES = [CNCurrencyPipe, KeysPipe, YNPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class PipesModule {}
