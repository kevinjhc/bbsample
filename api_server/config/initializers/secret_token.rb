# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
ApiServer::Application.config.secret_key_base = 'b331986917833ba32dc193c2d4a64bf7afad73cdc0cbee4250d761980406cb16f85257d5504cff62ec8896e02cb7d7980933b9091ff42e05b22df4b5bb177b17'
