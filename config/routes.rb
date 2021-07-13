Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'static#index'

  scope '/API' do
    resources :users, only: [:create, :show] do
      resources :posts, path: "beans", only: [:index]
    end
  
    resources :posts, path: "beans" do
      resources :comments, except: [:show, :edit, :new]
    end
    
    post :reactions, to: 'reactions#react_or_remove'
  
    resources :sessions, only: [:create, :destroy, :index]
  end

  match '*path' => redirect('/'), via: :get

end
