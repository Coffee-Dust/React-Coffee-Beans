class PostSerializer

  @@options = {
    except: [:updated_at],
    include: {
      user: {only: [:id, :name]}
    }
  }

  def initialize(post)
    @post = post
  end

  def to_serialized_json
    @json = @post.as_json(@@options)
    @json["comment_count"] = @post.comment_count
    @json.to_json
  end
end