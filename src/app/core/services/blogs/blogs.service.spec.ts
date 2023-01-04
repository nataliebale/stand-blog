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
