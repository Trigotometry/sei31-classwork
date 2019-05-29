Rails.application.routes.draw do

	root :to => 'pages#root'

	get '/books' => 'library#search'
	get '/book/result' => 'library#show'

	get '/stocks' => 'invest#search'
	get '/stock/result' => 'invest#show'
	
end
