class Mutations::CreateUser < Mutations::BaseMutation
	argument :name, String, :required => true
	argument :email, String, :required => true

	field :user, Types::UserType, :null => false
	field :error, [String], :null => false

	def resolve( name:, email: ) # psychedelic destructuring
		user = User.new( :name => name, :email => email )
		if user.save
			{
				user: user,
				errors: []
			}
		else
			{
				user: nil,
				errors: user.errors.full_messages
			}
		end
	end
end