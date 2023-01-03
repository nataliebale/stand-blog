import { inject, TestBed } from "@angular/core/testing";
import { AboutService } from "./about.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BlogsService } from "../blogs/blogs.service";
import { IBlog } from "../../../libs/components";

describe('AboutService', () => {
  let httpTestingController: HttpTestingController;
  let service: BlogsService;
  let BLOGS: IBlog[] = [
    {
      id: 1,
      image: './assets/test.jpg',
      tag: 'testTag',
      title: 'testTitle',
      role: 'testRole',
      date: 'testDate',
      numOfComments: 5,
      description: 'testDesc',
      showFullDescription: false,
      isPopular: true
    },
    {
      id: 2,
      image: './assets/test.jpg',
      tag: 'testTag2',
      title: 'testTitle2',
      role: 'testRole2',
      date: 'testDate2',
      numOfComments: 4,
      description: 'testDesc2',
      showFullDescription: false,
      isPopular: true
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AboutService
      ]
    })

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BlogsService);
  })

  describe('getBanner$', () => {
    it('should call getBlogs with the right URL', () => {
        service.getBlogById$(2);
        // httpTestingController.
    })
  })
})
