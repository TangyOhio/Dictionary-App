Rails.application.routes.draw do
  namespace :api do
    get 'search_word/:word', to: 'words#search'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
