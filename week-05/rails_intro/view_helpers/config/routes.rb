Rails.application.routes.draw do

	root :to => 'pages#home'
	get '/numbers' => 'pages#numbers'
	get '/text' => 'pages#text'

end
