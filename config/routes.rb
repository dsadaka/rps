RailsBootstrap::Application.routes.draw do
  get '/new_game', :to => 'visitors#new'
  root :to => 'visitors#new'
end
