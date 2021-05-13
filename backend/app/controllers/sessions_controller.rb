class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])
    if user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      render json: UserSerializer.new(user).to_serialized_json
    else
      render json: {errors: ["Could not find account with that email/password!"]}, status: 403
    end
  end
end