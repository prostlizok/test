import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTranslatorFormComponent } from './archive-translator-form.component';

describe('ArchiveTranslatorFormComponent', () => {
  let component: ArchiveTranslatorFormComponent;
  let fixture: ComponentFixture<ArchiveTranslatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveTranslatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveTranslatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
