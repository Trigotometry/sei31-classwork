class InvestController < ApplicationController

	def search
		render :search
	end

	def show
		@stock_symbol = params[:stock_symbol]
		info = StockQuote::Stock.quote @stock_symbol
		@price = info.close

		render :show
	end

end
