class UsersController < ApplicationController

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user).to_serialized_json
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: UserSerializer.new(user).to_serialized_json
    else
      render json: {errors: user.errors}, status: 569
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
  
end