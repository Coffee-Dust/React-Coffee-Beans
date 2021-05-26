class CommentsController < ApplicationController
  
  def index
    comments = Post.find_by(id: params[:post_id]).comments
    render json: CommentSerializer.new(comments).to_serialized_json
  end

end