import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AboutComponent } from "./about.component";
import { AboutService, BannerService } from "../../core/services";
import { of } from "rxjs";
import { IAbout } from "./entity/about.interface";
import { BannerComponent, ComponentsModule, IBanner, SocialsComponent } from "../../libs/components";
import { By } from "@angular/platform-browser";

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let mockAboutService: any;
  let mockBannerService: any;
  let ABOUT: IAbout;
  let BANNER: IBanner;

  beforeEach(() => {
    ABOUT = {
      image: './assets/test.jpg',
      title: 'test',
      description: 'test'
    }

    BANNER = {
      image: './assets/test.jpg',
      title: 'test',
      description: 'test'
    }

    mockAboutService = jasmine.createSpyObj(['getAbout$']);
    mockBannerService = jasmine.createSpyObj(['getBanner$']);

    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        BannerComponent,
        SocialsComponent
      ],
      providers: [
        { provide: AboutService, useValue: mockAboutService},
        { provide: BannerService, useValue: mockBannerService},
      ],
      imports: [
        ComponentsModule
      ]
    });

    fixture = TestBed.createComponent(AboutComponent);
    mockAboutService.getAbout$.and.returnValue(of(ABOUT));
  });

  it('should render banner as a BannerComponent', () => {
    mockBannerService.getBanner$().and.returnValue(of(BANNER));
    fixture.detectChanges();

    const bannerComponentDEs = fixture.debugElement.queryAll(By.directive(BannerComponent))
    console.log(bannerComponentDEs);
    expect(bannerComponentDEs[0].componentInstance.banner.title).toEqual('test');
  });
})











// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { AboutComponent } from './about.component';
//
// describe('AboutComponent', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AboutComponent ]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(AboutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
