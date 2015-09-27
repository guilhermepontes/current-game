class Summoner < ActiveRecord::Base
  attribute :id, Integer
  attribute :name, String
  attribute :profile_icon_id, Integer
  attribute :summoner_level, Integer
end
