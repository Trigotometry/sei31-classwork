Rails.application.routes.draw do
	post "/graphql", to: "graphql#execute" # API endpoint
	if Rails.env.development? # Dev mode
		mount GraphiQL::Rails::Engine, :at => '/graphiql', :graphql_path => 'graphql#execute'
	end
end
