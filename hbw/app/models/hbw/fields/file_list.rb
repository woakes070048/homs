module HBW
  module Fields
    class FileList < Ordinary
      def value?
        true
      end

      def coerce(value)
        value
      end
    end
  end
end
