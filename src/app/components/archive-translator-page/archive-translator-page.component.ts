import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { ArchiveTranslatorFormComponent } from "../archive-translator-form/archive-translator-form.component";

@Component({
    selector: 'app-archive-translator-page',
    standalone: true,
    templateUrl: './archive-translator-page.component.html',
    styleUrl: './archive-translator-page.component.scss',
    imports: [InputComponent, ArchiveTranslatorFormComponent]
})
export class ArchiveTranslatorPageComponent {

}
