import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';

const PrimeNgModules = [HttpClientModule, FormsModule, ReactiveFormsModule, CardModule, ButtonModule, TabMenuModule, InputGroupModule, InputGroupAddonModule, InputTextModule, TableModule, ListboxModule, CarouselModule, AutoCompleteModule, ToastModule, TooltipModule, RatingModule, DataViewModule, DialogModule, DynamicDialogModule, ScrollTopModule, CheckboxModule, AutoFocusModule, DividerModule, PdfViewerModule, TranslateModule, RadioButtonModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [...PrimeNgModules]
  ],
  exports: [PrimeNgModules]
})
export class PrimeNgModulesModule { }
