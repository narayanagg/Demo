import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  title = 'ng-transliteration';
  sinhalaText: string = '';
  constructor() {
  }
  @ViewChild('sinhalaTextInput', {static: false}) sinhalaTextInput: ElementRef;
  ngOnInit() {

  }
  ngAfterViewInit() {
    google.setOnLoadCallback(() => this.onLoad());
  }
  onLoad() {
    const sinhalOptions = {
      sourceLanguage:
        google.elements.transliteration.LanguageCode.ENGLISH,
      destinationLanguage:
                 [google.elements.transliteration.LanguageCode.TELUGU],
   shortcutKey: 'ctrl+s',
   transliterationEnabled: true
 };
 const tamilOptions = {
   sourceLanguage:
     google.elements.transliteration.LanguageCode.ENGLISH,
   destinationLanguage:
     [google.elements.transliteration.LanguageCode.TAMIL],
   shortcutKey: 'ctrl+t',
   transliterationEnabled: true
 };
    const sinhalaControl = new google.elements.transliteration.TransliterationControl(sinhalOptions);
    const elements = this.sinhalaTextInput.nativeElement;
    sinhalaControl.makeTransliteratable([elements.id]);
    // const sinhalaControl = new google.elements.transliteration.TransliterationControl(sinhalOptions);
    // sinhalaControl.makeTransliteratable(this.sinhalaText);
   }


}
