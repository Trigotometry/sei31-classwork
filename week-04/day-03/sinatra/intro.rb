require 'sinatra'
require 'sinatra/reloader'

get "/" do
	"Hello world, from Sinatra."
end

get "/lucky_number" do
	"Here is your lucky number #{ rand 1..40 }."
end

get "/uptime" do
	"The server uptime is: #{ `uptime` }."
end

get "/fanclub/:name" do
	"#{ params[:name].reverse.capitalize } is a proud member of the Marx Brothers fanclub."
end

get "/fanclub/:first/:last" do
	"#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brorthers fanclub."
end

get "/fanclub/:first/:last/:favourite" do
	"#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brorthers fanclub. Their favourite Marx Brother is #{ params[:favourite].capitalize }."
end

get "/multiply/:x/:y" do
	result = params[:x].to_f * [:y].to_f
	"The result is #{result}."
end
