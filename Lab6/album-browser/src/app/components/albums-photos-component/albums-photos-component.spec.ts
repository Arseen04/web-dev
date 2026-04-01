import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPhotosCompoenent } from '/Users/arsenshakirov/web_dev/Web-Dev/Lab6/album-browser/src/app/components/albums-photos-component';

describe('AlbumsPhotosCompoenent', () => {
  let component: AlbumsPhotosCompoenent;
  let fixture: ComponentFixture<AlbumsPhotosCompoenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsPhotosCompoenent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsPhotosCompoenent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
