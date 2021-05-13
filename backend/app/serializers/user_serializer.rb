class UserSerializer

  @@options = {
    except: [:created_at, :updated_at]
  }

  def initialize(user)
    @user = user
  end

  def to_serialized_json
    @user.to_json(@@options)
  end
end