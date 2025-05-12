import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateFilterComponent } from './certificate-filter.component';

describe('CertificateFilterComponent', () => {
  let component: CertificateFilterComponent;
  let fixture: ComponentFixture<CertificateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificateFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
