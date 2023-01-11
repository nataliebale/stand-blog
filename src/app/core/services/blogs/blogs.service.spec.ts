import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BlogsService } from "./blogs.service";

describe('BlogsService', () => {
  let httpTestingController: HttpTestingController;
  let service: BlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BlogsService
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BlogsService)
  })

  describe('getBlogById$', () => {
    it('should call getBlogById$ with the correct URL', () => {
      service.getBlogById$(1).subscribe();

      const req = httpTestingController.expectOne('api/data.json');

      req.flush({
        id: 4,
        image: './assets/test.jpg',
        tag: 'testTag2',
        title: 'testTitle2',
        role: 'testRole2',
        date: 'testDate2',
        numOfComments: 4,
        description: 'testDesc2',
        showFullDescription: false,
        isPopular: true
      });

      httpTestingController.verify();
    })

    it('should call getBlogById$ with the correct parameter', () => {

    })
  })
})



// import { TestBed } from '@angular/core/testing';
//
// import { BlogsService } from './blogs.service';
//
// describe('BlogsService', () => {
//   let service: BlogsService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(BlogsService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
