class SessionsController < Devise::SessionsController
  skip_before_action :assert_is_devise_resource!, :configure_permitted_parameters,
                     only: :sign_in_by_token

  before_action :set_greeting_text, only: :new

  def sign_in_by_token
    if sign_in_by_token_enabled? && params[:token] == token_config.fetch(:token)
      sign_in(token_user)
      redirect_to params.fetch(:redirect_to, '/')
    else
      flash[:error] = t('devise.failure.invalid', authentication_keys: t('devise.login'))
      redirect_to new_user_session_url
    end
  end

  def homs_config
    Rails.application.config.app
  end

  def set_greeting_text
    @greeting = homs_config.fetch(:greeting, {})
  end

  def token_config
    homs_config.fetch(:sessions, {}).fetch(:token_authentication, {})
  end

  def sign_in_by_token_enabled?
    token_config.fetch(:enabled, false) && token_config[:token].present?
  end

  def token_user
    User.find_by!(email: token_config.fetch(:sign_in_as))
  end

  def redirect_to_keycloak
    redirect_to HOMS.container[:keycloak_client].auth_url
  end

  def authenticate_by_keycloak
    HOMS.container[:keycloak_client].authenticate!(params['code']).either(
      proc do |session_state|
        cookies['session_state'] = {value: session_state, httponly: true}

        sign_in(keycloak_user(session_state))
        redirect_to params.fetch(:redirect_to, '/')
      end,
      proc do
        flash[:error] = t('devise.failure.invalid', authentication_keys: t('devise.login'))
        redirect_to new_user_session_url
      end
    )
  end

  def destroy
    if use_keycloak?
      sign_out current_user
      redirect_to HOMS.container[:keycloak_client].logout!(cookies['session_state'])
    else
      super
    end
  end
end
