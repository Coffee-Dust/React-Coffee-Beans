class PostsController < ApplicationController

  def index
    posts = Post.limit(params[:limit])
    json = posts.map do |post| 
      PostSerializer.new(post).to_serialized_json
    end
    render json: json
  end

end
