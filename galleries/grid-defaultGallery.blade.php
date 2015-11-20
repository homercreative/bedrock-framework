<div class="gallery grid">
    @if(!empty($images))
    @foreach($images as $image)
        <a href="{{ $image->external }}" class="gallery-image" title="{{ empty($image->title) ? $image->filename : $image->title }}">
            <img src="{{ $image->external }}/200x200" title="{{ empty($image->title) ? $image->filename : $image->title }}"/>
        </a>
    @endforeach
        @endif
</div>