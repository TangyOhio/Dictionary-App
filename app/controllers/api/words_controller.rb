require 'oxford_dictionary'

class Api::WordsController < ApplicationController

  def search
    client = OxfordDictionary::Client.new(app_id: ENV['APP_ID'], app_key: ENV['APP_KEY'])
    render json: client.entry(params[:word])
  end
end
