class CommentsController < ApplicationController
  
  def index
    comments = Post.find_by(id: params[:post_id]).comments.order(created_at: "desc")
    render json: CommentSerializer.new(comments).to_serialized_json
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: CommentSerializer.new(comment).to_serialized_json
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, :user_id)
  end

end