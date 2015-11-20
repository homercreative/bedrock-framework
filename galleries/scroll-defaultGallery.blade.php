<div class="gallery scroll">
    <div class="owl-gallery">
        @if(!empty($images))
        @foreach($images as $image)
            <div class="item">
            <a href="{{ $image->external }}" class="gallery-image"
               title="{{ empty($image->title) ? $image->filename : $image->title }}">
                <img src="{{ $image->external }}/300x300?fit=true&bg=EFEFEF"
                     title="{{ empty($image->title) ? $image->filename : $image->title }}"/>
            </a>
                </div>
        @endforeach
            @endif
    </div>
</div>