class CommentSerializer

  @@options = {
    only: [:id, :content, :created_at],
    include: {
      user: {only: [:id, :name]}
    }
  }

  def initialize(comment)
    @comment = comment
  end

  def to_serialized_json
    @json = @comment.as_json(@@options)
    # @json["reactions_count"] = @comment.reactions_count
    @json
  end
end