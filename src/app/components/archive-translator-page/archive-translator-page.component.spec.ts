import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTranslatorPageComponent } from './archive-translator-page.component';

describe('ArchiveTranslatorPageComponent', () => {
  let component: ArchiveTranslatorPageComponent;
  let fixture: ComponentFixture<ArchiveTranslatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveTranslatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveTranslatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
