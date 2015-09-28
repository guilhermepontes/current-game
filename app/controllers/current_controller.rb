class CurrentController < ApplicationController
  def index
    render component: 'Form', props: {
      action: search_path,
      csrf_param: request_forgery_protection_token,
      csrf_token: form_authenticity_token
    }
  end

  def search
    id = Summoner.id_by_nick params[:nick]

    client = Taric.client region: :br
    info = client.current_game summoner_id: id

    render component: 'Game', props: info
  end
end
