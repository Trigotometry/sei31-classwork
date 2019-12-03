require 'card'

RSpec.describe Card do
	let(:card) { Card.new('Ace', 'Spades') }

	it 'has a rank and can change' do
		expect(card.rank).to eq('Ace')
		card.rank = 'Queen'
		expect(card.rank).to eq('Queen')
	end

	it 'has a suit' do
		expect(card.suit).to eq('Spades')
	end

	it 'has a suit and can change, custom error message' do
		card.suit = 'Clubs'
		comparison = 'Spades'
		expect(card.suit).to eq(comparison), "Expected #{card.suit}, but got #{comparison} instead."
	end
end