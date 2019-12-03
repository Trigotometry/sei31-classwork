RSpec.describe '#even? method' do
	# if testing instance method, put a '#'
	# if testing class method put a '.'

	before(:context) do
		# runs only once BEFORE the 'context' of the main describe block.
		puts "Before context."
	end

	after(:context) do
		# runs only once AFTER the 'context' of the main describe block.
		puts "After context."
	end

	before(:example) do
		# runs BEFORE EVERY example.
		puts "Before example."
	end

	after(:example) do
		# runs AFTER EVERY example.
		puts "After example."
	end

	context 'with even number' do
		it 'should return true' do
			expect(4.even?).to eq(true)
		end
	end
	
	describe 'with odd number' do
		it 'should return false' do
			expect(3.even?).to eq(false)
		end
	end

end