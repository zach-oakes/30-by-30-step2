import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentListViewComponent } from './student-list-view/student-list-view.component';
import { StudentDetailViewComponent } from './student-detail-view/student-detail-view.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { MatActionList, MatListItem } from "@angular/material/list";
import { MatDivider } from "@angular/material/divider";
import { MatInput } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatOption } from "@angular/material/autocomplete";
import { MatSelect } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    StudentListViewComponent,
    StudentDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDrawerContainer,
    MatButtonModule,
    MatDrawer,
    MatFormFieldModule,
    MatRadioGroup,
    MatRadioButton,
    MatActionList,
    MatDivider,
    MatListItem,
    MatInput,
    FormsModule,
    MatOption,
    MatSelect
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
