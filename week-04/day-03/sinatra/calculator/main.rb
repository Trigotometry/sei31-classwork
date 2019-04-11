require "sinatra"
require "sinatra/reloader"
require "pry"
require "stock_quote"

get "/" do
	erb :home
end

get "/faq" do
	erb :faq
end

get "/result" do
	@x = params[:x].to_f
	@y = params[:y].to_f

	@result = case params[:operator]
	when "+" then @x + @y
	when "-" then @x - @y
	when "*" then @x * @y
	when "/" then @x / @y
	end

	erb :result
end

get "/stocks" do
	@stock = StockQuote::Stock.quote("GOOG")

	erb :stock
end
