Rails.application.routes.draw do

	root :to => 'proxy#index'

	get '/fetch' => 'proxy#fetch'

end
