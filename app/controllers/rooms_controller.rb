class RoomsController < ApplicationController
  def index
    @rooms = Room.order(id: :asc).all
  end

  def edit
    @room = Room.find(params[:id])
  end

  def debug
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

  def show
    @room = Room.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render :json => @room }
    end
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      redirect_to rooms_path #redirecting to action
    else
      render 'new'
    end
  end

  def destroy
    Room.find(params[:id]).destroy
    flash[:success] = "User Deleted"
    redirect_to rooms_path
  end

  private
  def room_params
    params.require(:room).permit(:name, :spark_id, :current_temp, :target_temp)
  end

end
