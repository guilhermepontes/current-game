Rails.application.routes.draw do
  root 'current#index'

  post '/search', to: 'current#search', as: :search
end
