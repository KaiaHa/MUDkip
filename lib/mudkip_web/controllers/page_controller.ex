defmodule MudkipWeb.PageController do
  use MudkipWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
