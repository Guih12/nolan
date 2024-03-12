source "https://rubygems.org"

ruby "3.2.2"

#core of the application
gem "rails", "~> 7.1.3", ">= 7.1.3.2"
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"

#authentication
gem "bcrypt", "~> 3.1.7"

gem "tzinfo-data", platforms: %i[ windows jruby ]
gem "bootsnap", require: false
gem "image_processing", "~> 1.2"
gem "rack-cors"

#for validations type and flow of usecases
gem "u-case"
gem "kind"
gem "u-attributes"

#serializing the data
gem "blueprinter"
gem "oj"

#autoloading
gem "zeitwerk"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri windows ]
  %w[rspec-core rspec-expectations rspec-mocks rspec-rails rspec-support].each do |lib|
    gem lib, git: "https://github.com/rspec/#{lib}.git", branch: 'main'
  end
  
  gem "faker"
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
  #gem "rspec-rails"
end

