directory "_galleries" do
    dato.galleries.each do |item|
      create_post "#{item.title.parameterize}.md" do
        frontmatter :yaml, {
          image: item.imagem
        }
      end
    end
end

directory "_videos" do
  dato.videos.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        video: item.video
      }
    end
  end
end