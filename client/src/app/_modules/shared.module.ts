import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    MenubarModule,
    MenuModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports: [
    BsDropdownModule,
    MenubarModule,
    MenuModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ToastrModule
  ]
})
export class SharedModule { }
