class Summoner < ActiveRecord::Base
  attr_accessor :id, :name, :profile_icon_id, :summoner_level, :revision_date

  def self.find(nick)
    client = Taric.client(region: :br)

    params = client.summoners_by_names(summoner_names: nick)[nick.downcase.split.join].transform_keys(&:underscore)
    self.new(params)
  end

  def self.id_by_nick(nick)
    find(nick).id
  end
end
