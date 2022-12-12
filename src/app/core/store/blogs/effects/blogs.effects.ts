import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BlogsService } from "../../../services/blogs/blogs.service";
import * as BlogsActions from "../actions/blogs.action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class BlogsEffects {
  constructor ( private actions$: Actions,
                private blogsService: BlogsService ) {
  }

  loadBlogs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogsActions.loadBlogs),
      mergeMap(() => this.blogsService.getBlogs$().pipe(
        map(blogs => BlogsActions.loadBlogsSuccess({ blogs })),
        catchError(error =>
          of(BlogsActions.loadBlogsError({ error }))
        )
      ))
    )
  })

}
