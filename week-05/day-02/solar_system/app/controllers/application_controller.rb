class ApplicationController < ActionController::Base

	skip_before_action :verify_authenticity_token # only need this for handwritten forms

end
