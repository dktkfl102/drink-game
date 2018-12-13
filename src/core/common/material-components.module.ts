import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MAT_DATE_LOCALE
    , MatAutocompleteModule
    , MatButtonModule
    , MatButtonToggleModule
    , MatCardModule
    , MatCheckboxModule
    , MatDatepickerModule
    , MatDialogModule
    , MatGridListModule
    , MatIconModule
    , MatInputModule
    , MatListModule
    , MatMenuModule
    , MatNativeDateModule
    , MatPaginatorModule
    , MatProgressBarModule
    , MatProgressSpinnerModule
    , MatRadioModule
    , MatRippleModule
    , MatSelectModule
    , MatSidenavModule
    , MatSliderModule
    , MatSlideToggleModule
    , MatSnackBarModule
    , MatSortModule
    , MatStepperModule
    , MatTableModule
    , MatTabsModule
    , MatToolbarModule
    , MatTooltipModule
    , MatChipsModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatInputModule,
        MatTabsModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatSliderModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatRippleModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatStepperModule,
        MatChipsModule,
    ],
    providers:[
        {provide: MAT_DATE_LOCALE, useValue: 'ko-KR'}
    ]
})
export class MaterialModule {
}