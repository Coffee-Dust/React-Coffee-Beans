class PostsController < ApplicationController

  def index
    posts = Post.order(created_at: "desc").limit(params[:limit])
    json = posts.map do |post| 
      PostSerializer.new(post).to_serialized_json
    end
    render json: json
  end

  def create
    post = current_user.posts.build(post_params)
    if post.save
      render json: PostSerializer.new(post).to_serialized_json
    else
      render json: {errors: post.errors}, status: 569
    end
  end

  private

  def post_params
    params.require(:post).permit(:content, :user_id)
  end

  def current_user
    @current_user ||= User.find_by(id: post_params[:user_id])
  end

end
