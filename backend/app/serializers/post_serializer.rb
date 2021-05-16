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
    @post.to_json(@@options)
  end
end