Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create]
  resources :posts, path: "beans" do
    resources :comments, except: [:show, :edit, :new]
  end
  
  post :reactions, to: 'reactions#react_or_remove'

  resources :sessions, only: [:create, :destroy, :index]
end
