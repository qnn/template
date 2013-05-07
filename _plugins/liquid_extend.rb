require "json"

module LiquidExtend
  def lastchar(input)
    input[-1]
  end
  def json(input)
    input.to_json
  end
  def prepend_relative(input, relative)
    (input[0, 7] == "http://" || input[0, 8] == "https://" ? '' : relative) + input
  end
  
  Liquid::Template.register_filter self
end
