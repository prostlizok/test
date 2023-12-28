import { Component, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { InputType } from '../../models/InputType';
import { MessageComponent } from "../message/message.component";
import { MessageStatus } from '../../models/MessageStatus';
import { ButtonComponent } from "../button/button.component";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-archive-translator-form',
    standalone: true,
    templateUrl: './archive-translator-form.component.html',
    styleUrl: './archive-translator-form.component.scss',
    imports: [CommonModule, InputComponent, MessageComponent, ButtonComponent, ProgressBarComponent]
})
export class ArchiveTranslatorFormComponent {
    constructor(private renderer: Renderer2) { }

    showProgress: boolean = false;
    showResult: boolean = false;

    MessageStatus = MessageStatus;
    InputType = InputType;

    currentFile: any = {};
    currentFileMessage: any = {};
    progressMessage: any = {};

    allowedFormats: any[] = ['tar', 'gz']
    archiveInfo: any = {
        'openai_api_key': '',
        'openai_model': '',
        'language': '',
        'archive': {},
    };

    progress: any = [{
        label: "HTML Progress",
        currValue: 12,
        maxValue: 40
    },
    {
        label: "XML Progress",
        currValue: 8,
        maxValue: 30
    },
    {
        label: "Tags translated in current file",
        currValue: 21,
        maxValue: 81
    }]
    models = ["GPT-3.5 Turbo ($0.001/$0.002)", "GPT-4 Turbo ($0.01/$0.03)", "GPT-4 ($0.03/$0.06)"]
    languages = ["English", "Ukrainian", "French", "German"]

    @ViewChild('mainContent') mainContent: ElementRef = {} as ElementRef

    ngAfterViewInit() {
        this.updateContentWidth();
    }

    @HostListener('window:resize', ['$event'])
    updateContentWidth() {
        const width = window.innerWidth;
        if (width >= 320 && width <= 600) {
            this.renderer.setStyle(this.mainContent.nativeElement, 'width', '300px');
        } else if (width >= 600 && width <= 1100) {
            this.renderer.setStyle(this.mainContent.nativeElement, 'width', '550px');
        } else {
            this.renderer.setStyle(this.mainContent.nativeElement, 'width', '1000px');
        }
    }

    validateUploadedFiles(file: any) {
        if (file.length === 0) {
            this.archiveInfo.archive = {}
            this.currentFileMessage = {}
        }
        else if (file.length === 1) {
            if (this.allowedFormats.includes(file[0].name.split('.').pop())) {
                this.archiveInfo.archive = file;
                this.currentFileMessage = {
                    text: 'Archive uploaded successfully!',
                    status: MessageStatus.success
                }
            }
            else {
                this.archiveInfo.archive = {}
                this.currentFileMessage = {
                    text: 'Extension of uploaded file is not supported.',
                    status: MessageStatus.error
                }
            }
        }
        else {
            this.archiveInfo.archive = {}
            this.currentFileMessage = {
                text: 'Only one file is allowed to be uploaded.',
                status: MessageStatus.error
            }
        }
    }

    handleInput(event: any, id: string) {
        this.archiveInfo[id] = event;
    }

    isTranslateArchiveDisabled(): boolean {
        let obj = this.archiveInfo;
        return !obj.language || !obj.openai_api_key || !obj.openai_model || this.isObjectEmpty(obj.archive)
    }


    translateArchive() {
        this.showProgress = true;
        this.progressMessage = {
            text: 'Archive was translated in: 434.544 seconds.',
            status: MessageStatus.success
        }

        setTimeout(() => this.showResult = true, 2000)
    }

    isObjectEmpty(obj: Object): boolean {
        return Object.keys(obj).length === 0;
    }


}