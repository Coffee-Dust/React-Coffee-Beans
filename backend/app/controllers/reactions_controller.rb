class ReactionsController < ApplicationController
  def react_or_remove

    @reaction = Reaction.find_or_build_reaction_with(reaction_params, current_user)

  end


  private

  def reaction_params
    params.require(:reaction).permit(:reaction_type, :user_id, :reactable_id, :reactable_type)
  end

  def current_user
    @current_user ||= User.find_by(id: reaction_params[:user_id])
  end

end