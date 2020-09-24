<div class="page-header">

  <div class="container">

    <nav class="page-back">
      <a href="/news/" class="page--back">&larr; Back to all news</a>
    </nav>

    <h1 class="title">{!! App::title() !!}</h1>
    <div class="post--date">{{ date(get_option( 'date_format' ), strtotime($post->post_date))   }}</div>

    <div class="page-header--description">
      @if($page->excerpt)
        <p class="excerpt">{!! $page->excerpt !!}</p>
      @elseif($page->description)
          {!! $page->description !!}
      @endif
    </div>

  </div>

</div>
