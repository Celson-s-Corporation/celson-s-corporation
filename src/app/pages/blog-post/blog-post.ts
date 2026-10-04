import { Component, computed, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-post.html',
})
export class BlogPost {
  readonly slug = input<string>('');

  protected readonly post = computed(() => BLOG_POSTS.find((p) => p.slug === this.slug()));
}
