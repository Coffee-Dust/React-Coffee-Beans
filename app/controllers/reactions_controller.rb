class ReactionsController < ApplicationController
  def react_or_remove

    @reaction = Reaction.find_or_build_reaction_with(reaction_params, current_user)

    if @reaction.persisted?
      # If it is persisted, then it already exists and must be destroyed!
      self.destroy
    else
      self.create
    end
  end

  def create

    if @reaction.reactable && @reaction.save
      render json: @reaction.reactable.reactions_count
    else
      render json: {errors: ["This should never be called. Like seriously if your seeing this something went really wrong"]}, status: 569
    end
  end

  def destroy
    @reaction.destroy
    render json: @reaction.reactable.reactions_count
  end

  private

  def reaction_params
    params.require(:reaction).permit(:reaction_type, :user_id, :reactable_id, :reactable_type)
  end

  def current_user
    @current_user ||= User.find_by(id: reaction_params[:user_id])
  end

end