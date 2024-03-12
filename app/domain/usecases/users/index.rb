module Users
  class Index < ::Micro::Case
    attributes :name, :email, :password

    def call!
      return Failure(:invalid_name) if name.nil? || name.empty?
    end
  end
end