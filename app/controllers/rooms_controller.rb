class RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end

  def edit
    @room = Room.find(params[:id])
  end

  def update
    @room = Room.find(params[:id])
    if @room.update_attributes(room_params) #room_params is a method
      redirect_to rooms_path #redirecting to action
    else
      render 'edit'
    end
  end

  def new
    @room = Room.new
  end

  private
  def room_params
    params.require(:room).permit(:name, :current_temp, :target_temp)
  end

end
