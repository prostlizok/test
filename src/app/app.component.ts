import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArchiveTranslatorPageComponent } from "./components/archive-translator-page/archive-translator-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ArchiveTranslatorPageComponent]
})
export class AppComponent {
  title = 'archive-translator';
}
