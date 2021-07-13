class UserSerializer

  @@options = {
    only: [:id, :email, :name]
  }

  def initialize(user)
    @user = user
  end

  def to_serialized_json
    @user.to_json(@@options)
  end
end