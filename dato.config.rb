directory "_galleries" do
    dato.galleries.each do |item|
      create_post "#{item.title.parameterize}.md" do
        frontmatter :yaml, {
          image: item.imagem.url(w: 580, h: 520, fit: :crop)
        }
      end
    end
end

directory "_videos" do
  dato.videos.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        video: item.video.url(w: 854, h:480)
      }
    end
  end
end

