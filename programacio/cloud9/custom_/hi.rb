require 'sinatra'

get '/hi' do
  erb :fe
end

get '/' do
  erb :index
end

get '/monster' do
  erb :monster
end

get '/cat' do
  erb :cat
end