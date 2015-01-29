# == Route Map
#
#    Prefix Verb   URI Pattern               Controller#Action
#     rooms GET    /rooms(.:format)          rooms#index
#           POST   /rooms(.:format)          rooms#create
#  new_room GET    /rooms/new(.:format)      rooms#new
# edit_room GET    /rooms/:id/edit(.:format) rooms#edit
#      room GET    /rooms/:id(.:format)      rooms#show
#           PATCH  /rooms/:id(.:format)      rooms#update
#           PUT    /rooms/:id(.:format)      rooms#update
#           DELETE /rooms/:id(.:format)      rooms#destroy
#      root GET    /                         home#index
#

Rails.application.routes.draw do
  resources :rooms


  root 'home#index' #controller#action



end
