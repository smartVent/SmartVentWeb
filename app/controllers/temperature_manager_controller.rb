class TemperatureManagerController < ApplicationController
  def all_rooms
    @rooms = Room.all
  end
end
